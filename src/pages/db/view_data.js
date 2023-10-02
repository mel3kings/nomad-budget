import { useEffect, useState } from "react";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../../../config/ddbDocClient";
import { DisplayCurrency } from "../../app/common/display-utils";
import Link from "next/link.js";
import { TABLE_NAME } from "../../../config/dbconfig";

const Styles = {
  tableHeadings: "text-sm font-medium text-gray-900 px-6 py-4 text-left border-2",
  tableData: "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",
};

export const ViewData = () => {
  let data = [];
  const [tableData, setTableData] = useState([]);

  //   scanning the dynamodb table
  const scanTable = async () => {
    try {
      data = await ddbDocClient.send(new ScanCommand({ TableName: TABLE_NAME }));
      setTableData(data.Items);
    } catch (err) {
      console.log("Error", err);
    }
  };

  //   deleting an item from the table
  const deleteItem = async (primaryKeyValue, sortKeyValue) => {
    try {
      await ddbDocClient.send(
        new DeleteCommand({
          TableName: TABLE_NAME,
          Key: {
            id: primaryKeyValue, // primarykeyName : primaryKeyValue
            dateAdded: sortKeyValue, // sortkeyName : sortkeyValue
          },
        })
      );
      console.log("Success - item deleted");
      scanTable();
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    scanTable();
  }, []);

  return (
    <div className="container items-center">
      <div className="flex w-full justify-end pt-5"></div>
      <p className="text-3xl">Previous Expenses</p>
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

                    <th scope="col" className={Styles.tableHeadings}>
                      Exchange Rate
                    </th>
                    {/* <th scope="col" className={Styles.tableHeadings}>
                      Date Added
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
                  {tableData.map((item) => (
                    <tr className="border-b" key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.dateAdded}
                      </td>
                      <td className={Styles.tableData}>{item.category}</td>
                      <td className={Styles.tableData}>{item.type}</td>
                      <td className={Styles.tableData}>{DisplayCurrency(item.currency)}</td>
                      <td className={Styles.tableData}>{item.amount}</td>
                      <td className={Styles.tableData}>{item.exchangeRate}</td>
                      {/* <td className={Styles.tableData}>{item.email}</td> */}
                      <td className={Styles.tableData}>{item.notes}</td>
                      {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td> */}
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                        <Link
                          href={{
                            pathname: "/updatedata",
                            query: {
                              id: item.id,
                              dateAdded: item.dateAdded,
                              firstName: item.firstName,
                              lastName: item.lastName,
                              city: item.city,
                              phoneNumber: item.phoneNumber,
                              category: item.category,
                              type: item.type,
                              amount: item.amount,
                              currency: item.currency,
                              notes: item.notes,
                              email: item.email,
                            },
                          }}
                        >
                          <button
                            type="button"
                            className="inline-block px-6 py-2.5 mr-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Edit
                          </button>
                        </Link>
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
