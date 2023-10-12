"use client";

import { useEffect, useState, useContext } from "react";
import { CurrencyExpenseSelect } from "../common/display-utils";
import { DisplayCurrency } from "../common/display-utils";
import { styles } from "../common/styles";
import { GetExchangeRates } from "@/lib/exchange_rate";
import CurrencyInput from "react-currency-input-field";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });
export const UserConversion = () => {
  const [amount, setAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0.0);
  const [userCurrency, setUserCurrency] = useState("USD");

  useEffect(() => {
    const fetchCurrency = async () => {
      const currentUserCurrency = localStorage.getItem("selectedCurrency") || "USD";
      const apiResponse = await GetExchangeRates(currentUserCurrency);
      const apiExchangeRate = apiResponse.rates[toCurrency];
      const cv = amount / apiExchangeRate;
      if (!isNaN(cv)) {
        setConvertedAmount(cv.toFixed(2));
      }
      setUserCurrency(currentUserCurrency);
    };
    fetchCurrency();
  }, [amount, toCurrency]);
  return (
    <div
      className={`font-medium ${nunito.className} block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-gray-200 border-gray-700`}
    >
      <span className="text-md">Convert to {DisplayCurrency(userCurrency)}</span>
      <div className="flex grid min-w-screen grid-cols-3 gap-1">
        <div className="col-span-1">
          <CurrencyExpenseSelect setSelectedCurrency={setToCurrency} selectedCurrency={toCurrency} shortForm={true} />
        </div>
        <div className="col-span-2">
          <CurrencyInput
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
        {convertedAmount !== 0.0 && (
          <>
            <div className="col-span-1 pt-2">{DisplayCurrency(userCurrency)}</div>
            <div className="col-span-2">
              <CurrencyInput
                className={`${styles.inputField}`}
                id="input-example"
                name="input-name"
                placeholder="Please enter a number"
                defaultValue={0}
                decimalsLimit={2}
                value={convertedAmount}
                disabled="true"
                onValueChange={(value, name) => setAmount(value)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
