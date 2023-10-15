"use client";

import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { TABLE_NAME } from "../../../config/dbconfig";
import { ddbDocClient } from "../../../config/ddbDocClient";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CurrencyExpenseSelect, DisplayCurrency } from "@/app/common/display-utils";
import { useEffect, useState } from "react";
import { GetExchangeRates } from "../utils/exchange_rate";
import { Popup } from "@/app/common/popup";
import DatePicker from "react-datepicker";
import moment from "moment";
import CurrencyInput from "react-currency-input-field";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../common/styles";

const AddData = ({ setEntries }) => {
  const { user } = useUser();
  const [userCurrency, setUserCurrency] = useState("");
  const [expenseDate, setExpenseDate] = useState(new Date());
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("Expense");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    setSelectedCurrency(localStorage.getItem("selectedCurrency") || "USD");
  }, []);

  useEffect(() => {
    setAmount(0);
  }, [selectedCurrency]);

  useEffect(() => {
    const getData = async () => {
      const currentUserCurrency = localStorage.getItem("selectedCurrency");
      const apiResponse = await GetExchangeRates(currentUserCurrency);
      const apiExchangeRate = apiResponse.rates[selectedCurrency];
      setUserCurrency(currentUserCurrency);
      if (!isNaN(apiExchangeRate)) {
        setExchangeRate(apiExchangeRate);
      }

      const cv = amount / apiExchangeRate;
      if (!isNaN(cv)) {
        setConvertedAmount(cv.toFixed(2));
      }
    };
    getData();
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dater = new Date(expenseDate);
    const formattedDate = moment(dater).format("DD/MM/YYYY, HH:mm:ss");

    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: Math.floor(Math.random() * 1000000),
        category: event.target.category.value,
        type: event.target.type.value,
        amount: amount,
        currency: event.target.currency.value,
        notes: event.target.notes.value,
        exchangeRate: exchangeRate,
        email: user?.email,
        dateAdded: formattedDate.toLocaleString(),
      },
    };

    try {
      await ddbDocClient.send(new PutCommand(params));
      setEntries(Math.random());
      document.getElementById("addData-form").reset();
      setShowPopup(true);
    } catch (err) {
      console.log("Error", err.stack);
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen p-5">
        <p className="text-3xl mb-5 font-black">Add Entry</p>
        <div className="block p-6 rounded-lg shadow-lg bg-white w-full justify-self-center">
          <form onSubmit={handleSubmit} id="addData-form">
            <div className="form-group mb-6">
              <label htmlFor="category" className="form-label inline-block mb-2 text-gray-700">
                Category
              </label>
              <select
                className={styles.inputField}
                id="category"
                name="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="Expense">Expense ⭕</option>
                <option value="Income">Income 🟢</option>
              </select>
            </div>

            <div className="form-group mb-6">
              <label htmlFor="type" className="form-label inline-block mb-2 text-gray-700">
                {category} Date
              </label>
              <br />
              <DatePicker
                dateFormat="MMM dd, yyyy"
                className="border-solid border-2 border-gray-200"
                selected={expenseDate}
                onChange={setExpenseDate}
                popperPlacement="bottom-end"
              />
            </div>

            <div className="form-group mb-6">
              <label htmlFor="type" className="form-label inline-block mb-2 text-gray-700">
                {category} Type
              </label>
              <select className={styles.inputField} id="type" name="type">
                {category === "Expense" ? (
                  <>
                    <option value="Cash Allowance">Cash Allowance 💵</option>
                    <option value="Food">Food 🍲</option>
                    <option value="Accommodation">Accommodation 🏠</option>
                    <option value="Transportation">Transportation 🚂</option>
                    <option value="Entertainment">Entertainment 🍿</option>
                    <option value="Utilities">Utilities 💡</option>
                    <option value="Internet">Internet 🌐</option>
                    <option value="Others">Others 🧳</option>
                  </>
                ) : (
                  <>
                    <option value="Salary">Salary 🧑‍💻</option>
                    <option value="Cash">Cash 💵</option>
                    <option value="Royalties">Royalties 👑</option>
                    <option value="Interests">Interests 📈</option>
                    <option value="Medium Partner Program">Medium Partner Program ✍️</option>
                    <option value="Twitch Partner Program">Twitch Partner Program 👾</option>
                    <option value="MRR">MRR 🍜</option>
                    <option value="Buy & Sell">Buy & Sell 🛍️</option>
                    <option value="Investment Funds">Investment Funds 🏦</option>
                    <option value="Others">Others 🧳</option>
                  </>
                )}
              </select>
            </div>
            <div className="form-group mb-6">
              <label htmlFor="currency" className="">
                {category} Currency
              </label>

              <CurrencyExpenseSelect setSelectedCurrency={setSelectedCurrency} selectedCurrency={selectedCurrency} />
            </div>

            <div className="form-group mb-6">
              <label htmlFor="amount" className="form-label inline-block mb-2 text-gray-700">
                {category} Amount
              </label>
              <br />
              <CurrencyInput
                prefix={`${DisplayCurrency(selectedCurrency)} `}
                className={styles.inputField}
                id="input-example"
                name="input-name"
                placeholder="Please enter a number"
                defaultValue={0}
                decimalsLimit={2}
                value={amount}
                onValueChange={(value, name) => setAmount(value)}
              />
            </div>

            <div className="text-black">
              <label htmlFor="" className="">
                Exchange Rate:
                <br />
                {DisplayCurrency(userCurrency)} 1
                {exchangeRate !== 0 && (
                  <>
                    {" "}
                    ≈ {DisplayCurrency(selectedCurrency)} {exchangeRate}
                  </>
                )}
              </label>
              <br />
            </div>

            <div className="pb-2">
              <label htmlFor="" className="">
                Home Rates: <br />
                {DisplayCurrency(userCurrency)} {convertedAmount}
              </label>
              <br />
            </div>

            <div className="">
              <label htmlFor="" className="">
                Notes
              </label>
              <br />
              <textarea className="bg-gray-100 w-full" name="notes" id="notes" cols="5" rows="5"></textarea>
            </div>

            <button
              type="submit"
              className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Submit
            </button>
            {showPopup && <Popup message="New Entry Added" onClose={handleClose} />}
          </form>
        </div>
      </div>
    </>
  );
};
export default AddData;
