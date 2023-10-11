"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useEffect, useState, useContext } from "react";
import { CurrencyContext } from "../currency-context";
import { Nunito } from "next/font/google";
import { QueryTable } from "../common/db-utils";
import {
  FormatDateDisplay,
  DisplayCurrency,
  FormatMobileDateDisplay,
  GetOverallTotal,
} from "../../app/common/display-utils";
import { CategoryStyle, FormatAsCurrency, DisplayType, GroupedExpense } from "../../app/common/display-utils";
import { Loader } from "../../app/common/display-utils";

const Styles = {
  tableHeadings: "text-sm font-bold text-gray-900 px-6 py-4 text-left border-2",
  tableData: "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",
  mobileTableData: "text-xs px-2 text-gray-900 font-light whitespace-nowrap",
};
const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });

const ExpenseTable = () => {
  const { user } = useUser();
  const [isLoading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (user) {
        const email = user?.email;
        const items = await QueryTable(email);
        setExpenses(items);
      }
    };
    fetchData();
    setLoading(false);
  }, [user]);

  return (
    <div className={`bg-white rounded shadow p-4 min-h-screen ${nunito.className} text-black`}>
      <ExpenseBreakdownTable isLoading={isLoading} expenses={expenses} />
      <div className="hidden md:inline-block font-bold">
        *NOTE: The system assumes you have one home currency and stores exchange rate based on selected currency during
        expense creation
      </div>
    </div>
  );
};

export default ExpenseTable;

export const ExpenseBreakdownTable = ({ isLoading, expenses }) => {
  const overallTotal = GetOverallTotal(expenses);
  const { selectedCurrency } = useContext(CurrencyContext);
  return (
    <>
      {isLoading && <Loader />}
      <div className="w-full font-black text-3xl">
        Total Cashflow:
        {overallTotal && selectedCurrency ? FormatAsCurrency(overallTotal.toString(), selectedCurrency || "USD") : ""}
      </div>
      {Object.entries(GroupedExpense(expenses)).map(([monthYear, data]) => (
        <div key={monthYear} className="mb-4">
          <h2 className="text-2xl font-bold pb-4">{monthYear}</h2>
          <table className="min-w-full table-fixed hidden md:inline-block">
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
                  Exchange Rate to ({DisplayCurrency(getCurrency())})
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
                  <span className={`${data?.total > 0 ? "text-green-600" : "text-red-600"}`}>
                    {FormatAsCurrency(data?.total?.toString(), getCurrency())}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <MobileTable data={data} monthYear={monthYear} />
        </div>
      ))}
    </>
  );
};

const MobileTable = ({ data, monthYear }) => {
  return (
    <table className="min-w-full table-fixed md:hidden inline-block">
      <thead className="border-b">
        <tr>
          <th scope="col">📆</th>
          <th scope="col">🧾</th>
          <th scope="col">🍲</th>
          <th scope="col">💵</th>
          {/* <th scope="col">Notes</th> */}
        </tr>
      </thead>
      <tbody>
        {data.expenses.map((expense) => (
          <tr key={expense.id} className="border-b">
            <td className={`${Styles.mobileTableData}`}>{FormatMobileDateDisplay(expense.dateAdded)}</td>
            <td className={`${Styles.mobileTableData}`}>{expense.category}</td>
            <td className={`${Styles.mobileTableData}`}>{DisplayType(expense.type)}</td>
            <td className={`${Styles.mobileTableData}  ${CategoryStyle(expense.category)}`}>
              {FormatAsCurrency(expense.amount, expense.currency)}
            </td>
            {/* <td className={`${Styles.mobileTableData}`}>{expense.notes}</td> */}
          </tr>
        ))}
        <tr key={`${monthYear}-total`} className="border-b">
          <td colSpan="3" className="text-sm text-gray-900 font-bold whitespace-nowrap">
            Total for {monthYear}
          </td>
          <td colSpan="1" className="text-sm text-gray-900 font-bold whitespace-nowrap">
            <span className={`${data?.total > 0 ? "text-green-600" : "text-red-600"}`}>
              {FormatAsCurrency(data?.total?.toString(), getCurrency())}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const getCurrency = () => {
  const stored = localStorage?.getItem("selectedCurrency");
  if (!stored) {
    return "USD";
  }
  return stored;
};
