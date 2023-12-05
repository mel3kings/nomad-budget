import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../../../config/ddbDocClient";
import moment from "moment";
import {
  FormatDateDisplay,
  DisplayCurrency,
  FormatAsCurrency,
  SortByDateDescending,
  CategoryStyle,
  DisplayType,
} from "../common/display-utils";
import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { TABLE_NAME } from "../../../config/dbconfig";
import { styles } from "../common/styles";
const { unmarshall } = require("@aws-sdk/util-dynamodb");

const ViewData = ({ entries, setEntries }) => {
  let data = [];
  const [tableData, setTableData] = useState([]);
  const { user, loading } = useUser();

  useEffect(() => {
    if (user) {
      const email = user?.email;
      queryTable(email);
    }
  }, [user, loading, entries]);

  const queryTable = async (email) => {
    try {
      const params = {
        TableName: TABLE_NAME,
        IndexName: "EmailIndex",
        KeyConditionExpression: "#email = :emailValue",
        ExpressionAttributeNames: {
          "#email": "email",
        },
        ExpressionAttributeValues: {
          ":emailValue": { S: email },
        },
      };

      data = await ddbDocClient.send(new QueryCommand(params));
      const items = data.Items.map((item) => {
        return unmarshall(item);
      });
      setTableData(SortByDateDescending(items));
    } catch (err) {
      console.log("Error", err);
    }
  };

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
    <div className="items-center">
      <p className="text-3xl font-black">Previous Entries</p>
      <div className="flex flex-col w-full py-10">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="w-full table-auto bg-gray-100">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className={styles.tableHeadings}>
                      Date Added
                    </th>
                    <th scope="col" className={`${styles.tableHeadings} w-15`}>
                      Category
                    </th>
                    <th scope="col" className={styles.tableHeadings}>
                      Type
                    </th>
                    <th scope="col" className={`${styles.tableHeadings} w-15`}>
                      Currency
                    </th>
                    <th scope="col" className={styles.tableHeadings}>
                      Amount
                    </th>
                    <th scope="col" className={styles.tableHeadings}>
                      Notes
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.length === 0 && (
                    <tr>
                      <td className="p-2">No Expenses created yet</td>
                    </tr>
                  )}
                  {tableData.map((item) => (
                    <tr className="border-b" key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {FormatDateDisplay(item.dateAdded)}
                      </td>

                      <td className={`${styles.tableData} ${CategoryStyle(item.category)}`}>{item.category}</td>
                      <td className={`${styles.tableData} whitespace-nowrap`}>{DisplayType(item.type)}</td>
                      <td className={styles.tableData}>{DisplayCurrency(item.currency)}</td>
                      <td className={`${styles.tableData} ${CategoryStyle(item.category)}`}>
                        {FormatAsCurrency(item.amount, item.currency)}
                      </td>
                      <td className={styles.tableData}>{item.notes}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                          onClick={() => deleteItem(item.id, item.dateAdded)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewData;
