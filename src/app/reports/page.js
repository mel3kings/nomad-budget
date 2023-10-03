"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useEffect, useState } from "react";
import { Nunito } from "next/font/google";
import { ddbDocClient } from "../../../config/ddbDocClient";
import { FormatDateDisplay, DisplayCurrency } from "../../app/common/display-utils";
import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { TABLE_NAME } from "../../../config/dbconfig";
import { CategoryStyle, FormatAsCurrency, DisplayType } from "../../app/common/display-utils";
const { unmarshall } = require("@aws-sdk/util-dynamodb");

const Styles = {
  tableHeadings: "text-sm font-bold text-gray-900 px-6 py-4 text-left border-2",
  tableData: "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",
};
const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });

const ExpenseTable = () => {
  const { user } = useUser();
  const [expenses, setExpenses] = useState([]);

  let data = [];
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const email = user?.email;
        const items = await queryTable(email);
        setExpenses(items);
      }
    };
    fetchData();
  }, [user]);

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
      return items;
    } catch (err) {
      console.log("Error", err);
    }
  };

  const groupedExpenses = expenses.reduce((acc, expense) => {
    const [day, month, year] = expense.dateAdded.split("/");
    const date = new Date(`${month}/${day}/${year}`);
    const monthYear = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
    if (!acc[monthYear]) {
      acc[monthYear] = { total: 0.0, expenses: [] };
    }

    if (expense.category === "Expense") {
      acc[monthYear].total -= parseFloat(expense.amount) / parseFloat(expense.exchangeRate);
    } else {
      acc[monthYear].total += parseFloat(expense.amount) / parseFloat(expense.exchangeRate);
    }

    acc[monthYear].expenses.push(expense);

    return acc;
  }, {});

  return (
    <div className={`bg-white rounded shadow p-4 min-h-screen ${nunito.className} text-black`}>
      {Object.entries(groupedExpenses).map(([monthYear, data]) => (
        <div key={monthYear} className="mb-4">
          <h2 className="text-2xl font-bold pb-4">{monthYear}</h2>
          <table className="min-w-full table-fixed">
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
                  Exchange Rate to ({DisplayCurrency(localStorage.getItem("selectedCurrency"))})
                </th>
                <th scope="col" className={`${Styles.tableHeadings} w-4/12`}>
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {data.expenses.map((expense) => (
                <tr key={expense.id} className="border-b">
                  <td className={Styles.tableData}>{FormatDateDisplay(expense.dateAdded)}</td>
                  <td className={`${Styles.tableData} ${CategoryStyle(expense.category)}`}>{expense.category}</td>
                  <td className={Styles.tableData}>{DisplayType(expense.type)}</td>
                  <td className={Styles.tableData}>{DisplayCurrency(expense.currency)}</td>
                  <td className={`${Styles.tableData} ${CategoryStyle(expense.category)}`}>
                    {FormatAsCurrency(expense.amount, expense.currency)}
                  </td>
                  <td className={Styles.tableData}>
                    {FormatAsCurrency(expense.exchangeRate.toString(), expense.currency)}
                  </td>
                  <td className={Styles.tableData}>{expense.notes}</td>
                </tr>
              ))}
              <tr key={`${monthYear}-total`} className="border-b">
                <td colSpan="6" />
                <td colSpan="2" className="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                  Total for {monthYear}
                  <br />
                  <span className={`${data.total > 0 ? "text-green-600" : "text-red-600"}`}>
                    {FormatAsCurrency(data.total.toString(), localStorage.getItem("selectedCurrency"))}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      *NOTE: The system assumes you have one home currency and stores exchange rate based on selected currency during
      expense creation
    </div>
  );
};

export default ExpenseTable;
