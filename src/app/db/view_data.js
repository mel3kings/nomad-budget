import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../../../config/ddbDocClient";
import moment from "moment";
import { QueryTable } from "../common/db-utils";
import { TABLE_NAME } from "../../../config/dbconfig";
import { ExpenseBreakdownTable } from "../reports/page";

const ViewData = ({ entries, setEntries }) => {
  const [tableData, setTableData] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const { user, loading } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const email = user?.email;
        const items = await QueryTable(email);
        setExpenses(items);
      }
    };
    fetchData();
  }, [user]);

  const deleteItem = async (primaryKeyValue, sortKeyValue) => {
    const stringDate = moment(sortKeyValue).format("DD/MM/YYYY, HH:mm:ss");
    try {
      await ddbDocClient.send(
        new DeleteCommand({
          TableName: TABLE_NAME,
          Key: {
            id: primaryKeyValue,
            dateAdded: stringDate,
          },
        })
      );
      console.log("Success - item deleted");
      setEntries(Math.random());
      if (user) {
        const email = user?.email;
        queryTable(email);
      }
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <div className="container items-center">
      <div className="flex w-full justify-end pt-5"></div>
      <p className="text-3xl font-black">Previous Entries</p>

      <ExpenseBreakdownTable expenses={expenses} />
    </div>
  );
};
export default ViewData;
