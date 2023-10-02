import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../../../config/ddbDocClient";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CurrencyExpenseSelect, DisplayCurrency } from "@/app/common/display-utils";
import { useEffect, useState } from "react";
import { GetExchangeRates } from "../lib/exchange_rate";

const styles = {
  inputField:
    "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
};

const AddData = () => {
  const { user } = useUser();
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("");

  useEffect(() => {
    console.log(convertedAmount);
    const getData = async () => {
      const userCurrency = localStorage.getItem("selectedCurrency");
      const apiResponse = await GetExchangeRates(userCurrency);
      const apiExchangeRate = apiResponse.rates[selectedCurrency];
      if (!isNaN(apiExchangeRate)) {
        setExchangeRate(apiExchangeRate);
      }
      const cv = amount / apiExchangeRate;
      if (!isNaN(cv)) {
        setConvertedAmount(cv);
      }
    };
    getData();
  }, [amount, selectedCurrency]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const params = {
      TableName: "Users",
      Item: {
        id: Math.floor(Math.random() * 10000),
        category: event.target.category.value,
        type: event.target.type.value,
        amount: event.target.amount.value,
        currency: event.target.currency.value,
        notes: event.target.notes.value,
        email: user?.email,
        dateAdded: new Date().toLocaleString(),
      },
    };

    try {
      await ddbDocClient.send(new PutCommand(params));
      document.getElementById("addData-form").reset();
    } catch (err) {
      console.log("Error", err.stack);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  return (
    <>
      <div className="flex flex-col h-screen p-5">
        <p className="text-3xl mb-5">Add Expense</p>
        <div className="block p-6 rounded-lg shadow-lg bg-white w-full justify-self-center">
          <form onSubmit={handleSubmit} id="addData-form">
            <div className="form-group mb-6">
              <label htmlFor="category" className="form-label inline-block mb-2 text-gray-700">
                Category
              </label>
              <select className={styles.inputField} id="category" name="category">
                <option value="Expense">Expense ⭕</option>
                <option value="Income">Income 🟢</option>
              </select>
            </div>

            <div className="form-group mb-6">
              <label htmlFor="type" className="form-label inline-block mb-2 text-gray-700">
                Type
              </label>
              <select className={styles.inputField} id="type" name="type">
                <option value="Food">Food 🍲</option>
                <option value="Accommodation">Accommodation 🏠</option>
                <option value="Transportation">Transportation 🚂</option>
                <option value="Entertainment">Entertainment 🍿</option>
                <option value="Utilities">Utilities 💡</option>
                <option value="Internet">Internet 🌐</option>
                <option value="Others">Others 🧳</option>
              </select>
            </div>
            <div className="form-group mb-6">
              <label htmlFor="currency" className="">
                Currency
              </label>

              <CurrencyExpenseSelect setSelectedCurrency={setSelectedCurrency} />
            </div>

            <div className="form-group mb-6">
              <label htmlFor="amount" className="form-label inline-block mb-2 text-gray-700">
                Amount
              </label>
              <input
                type="number"
                className={styles.inputField}
                id="amount"
                name="amount"
                onChange={handleAmountChange}
              />
            </div>

            <div className="text-black">
              <label htmlFor="" className="">
                Exchange Rate:
                <br />
                {DisplayCurrency(localStorage.getItem("selectedCurrency"))} 1
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
                {DisplayCurrency(localStorage.getItem("selectedCurrency"))} {convertedAmount}
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
          </form>
        </div>
      </div>
    </>
  );
};

export default AddData;
