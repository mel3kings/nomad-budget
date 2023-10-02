"use client";

import { useState, useEffect } from "react";
import { FormatDateFromLongFormat, DisplayCurrency } from "../common/display-utils";
import { GetExchangeRates } from "@/pages/lib/exchange_rate";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });

export const CurrencyRates = () => {
  const [response, setResponse] = useState({});
  useEffect(() => {
    const getData = async () => {
      const selectedCurrency = localStorage.getItem("selectedCurrency");
      const apiResponse = await GetExchangeRates(selectedCurrency);
      setResponse(apiResponse);
    };
    getData();
  }, []);
  return (
    <div>
      <span className="text-gray-400">Updated: {FormatDateFromLongFormat(response.time_last_updated)}</span>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Currency</th>
            <th className="py-2 px-4 text-left">Exchange Rate</th>
          </tr>
        </thead>
      </table>
      <table className={`flex flex-col max-h-96 overflow-y-auto ${nunito.className}`}>
        <tbody>
          {response &&
            response.rates &&
            Object.entries(response.rates).map(([currency, rate]) => (
              <tr key={currency}>
                <td className="py-1 px-4">{DisplayCurrency(currency)}</td>
                <td className="py-1 px-4">{rate}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
