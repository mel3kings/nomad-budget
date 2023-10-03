"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useEffect, useState } from "react";
import { ddbDocClient } from "../../../config/ddbDocClient";
import { FormatDateDisplay, DisplayCurrency } from "../../app/common/display-utils";
import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { TABLE_NAME } from "../../../config/dbconfig";
const { unmarshall } = require("@aws-sdk/util-dynamodb");

const Styles = {
  tableHeadings: "text-sm font-medium text-gray-900 px-6 py-4 text-left border-2",
  tableData: "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",
};

const ExpenseTable = () => {
  const { user, loading } = useUser();
  const [expenses, setExpenses] = useState([]);

  let data = [];
  useEffect(() => {
    console.log("esdfads");
    const fetchData = async () => {
      if (user) {
        const email = user?.email;
        console.log(email);
        const items = await queryTable(email);
        setExpenses(items);
        console.log(items);
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

  // Grouping expenses by month
  const groupedExpenses = expenses.reduce((acc, expense) => {
    const [day, month, year] = expense.dateAdded.split("/");
    const date = new Date(`${month}/${day}/${year}`);
    const monthYear = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
    if (!acc[monthYear]) {
      acc[monthYear] = { total: 0, expenses: [] };
    }

    acc[monthYear].total += parseInt(expense.amount);
    acc[monthYear].expenses.push(expense);

    return acc;
  }, {});

  return (
    <div className="bg-white rounded shadow p-4 min-h-screen">
      {Object.entries(groupedExpenses).map(([monthYear, data]) => (
        <div key={monthYear} className="mb-4">
          <h2 className="text-xl font-bold">{monthYear}</h2>
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
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {data.expenses.map((expense) => (
                <tr key={expense.id} className="border-b">
                  <td className={Styles.tableData}>{FormatDateDisplay(expense.dateAdded)}</td>
                  <td className={Styles.tableData}>{expense.category}</td>
                  <td className={Styles.tableData}>{expense.type}</td>
                  <td className={Styles.tableData}>{DisplayCurrency(expense.currency)}</td>
                  <td className={Styles.tableData}>{expense.amount}</td>
                  <td className={Styles.tableData}>{expense.notes}</td>
                </tr>
              ))}
              <tr key={`${monthYear}-total`} className="border-b">
                <td colSpan="4" />
                <td colSpan="2" className="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                  {new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date())} total{" "}
                  {data.expenses[0].currency}
                  {data.total}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ExpenseTable;
