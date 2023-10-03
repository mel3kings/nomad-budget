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
} from "../../app/common/display-utils";
import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { TABLE_NAME } from "../../../config/dbconfig";
const { unmarshall } = require("@aws-sdk/util-dynamodb");

const Styles = {
  expenseStyle:
    "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
  tableHeadings: "text-sm font-medium text-gray-900 px-6 py-4 text-left border-2",
  tableData: "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",
};

export const ViewData = ({ entries, setEntries }) => {
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
    <div className="container items-center">
      <div className="flex w-full justify-end pt-5"></div>
      <p className="text-3xl font-black">Previous Expenses</p>
      <div className="flex flex-col w-full py-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className={Styles.tableHeadings}>
                      Date Added
                    </th>
                    <th scope="col" className={Styles.tableHeadings}>
                      Category
                    </th>
                    <th scope="col" className={Styles.tableHeadings}>
                      Type
                    </th>
                    <th scope="col" className={Styles.tableHeadings}>
                      Currency
                    </th>
                    <th scope="col" className={Styles.tableHeadings}>
                      Amount
                    </th>

                    {/* <th scope="col" className={Styles.tableHeadings}>
                      Exchange Rate
                    </th> */}

                    <th scope="col" className={Styles.tableHeadings}>
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

                      <td className={`${Styles.tableData} ${CategoryStyle(item.category)}`}>{item.category}</td>
                      <td className={Styles.tableData}>{DisplayType(item.type)}</td>
                      <td className={Styles.tableData}>{DisplayCurrency(item.currency)}</td>
                      <td className={`${Styles.tableData} ${CategoryStyle(item.category)}`}>
                        {FormatAsCurrency(item.amount, item.currency)}
                      </td>
                      {/* <td className={Styles.tableData}>{item.exchangeRate}</td> */}
                      <td className={Styles.tableData}>{item.notes}</td>
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
