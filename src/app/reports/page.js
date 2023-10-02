import React from "react";
import { FormatDateDisplay, DisplayCurrency } from "../common/display-utils";

const Styles = {
  tableHeadings: "text-sm font-medium text-gray-900 px-6 py-4 text-left border-2",
  tableData: "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",
};

const ExpenseTable = () => {
  const expenses = [
    {
      currency: "VND",
      notes: "Ate good food",
      dateAdded: "01/10/2023, 19:54:51",
      category: "Expense",
      amount: "100",
      id: 3704,
      email: "meltatlonghari3@gmail.com",
      type: "Food",
    },
    {
      currency: "VND",
      notes: "Ate good food",
      dateAdded: "02/10/2023, 19:54:51",
      category: "Expense",
      amount: "100",
      id: 3704,
      email: "meltatlonghari3@gmail.com",
      type: "Food",
    },
    {
      currency: "VND",
      notes: "Ate good food",
      dateAdded: "03/10/2023, 19:54:51",
      category: "Expense",
      amount: "100",
      id: 3704,
      email: "meltatlonghari3@gmail.com",
      type: "Food",
    },
    {
      currency: "USD",
      notes: "asdfadf",
      dateAdded: "01/11/2023, 17:22:27",
      category: "Expense",
      amount: "123",
      id: 3286,
      email: "meltatlonghari3@gmail.com",
      type: "Food",
    },
  ];
  // Grouping expenses by month
  const groupedExpenses = expenses.reduce((acc, expense) => {
    const [day, month, year] = expense.dateAdded.split("/");
    const date = new Date(`${month}/${day}/${year}`);
    const monthYear = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
    // const date = new Date(expense.dateAdded);
    // const monthYear = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);

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
