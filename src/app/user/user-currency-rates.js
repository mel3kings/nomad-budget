"use client";

import { useState, useEffect, useContext } from "react";
import { CurrencyContext } from "../currency-context";
import { FormatDateFromLongFormat, DisplayCurrency } from "../common/display-utils";
import { GetExchangeRates } from "@/app/utils/exchange_rate";
import { Nunito } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";
import { UserConversion } from "./user-conversion";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });

export const CurrencyRates = () => {
  const { selectedCurrency } = useContext(CurrencyContext);
  const { user } = useUser();
  const [response, setResponse] = useState({});
  const [userCurrency, setUserCurrency] = useState("");

  useEffect(() => {
    const getData = async () => {
      setUserCurrency(selectedCurrency);
      const apiResponse = await GetExchangeRates(selectedCurrency);
      setResponse(apiResponse);
    };
    getData();
  }, [user, selectedCurrency]);
  return (
    <>
      {response && response.rates ? (
        <div className="bg-white">
          {user && (
            <div className="py-4">
              <UserConversion />
            </div>
          )}
          <span className="text-gray-400 italic">Updated: {FormatDateFromLongFormat(response.time_last_updated)}</span>
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left bg-black text-white w-14">Currency</th>
                <th className="py-2 px-4 text-left bg-gray-900 text-white pl-10">Exchange Rate {userCurrency}</th>
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
      ) : (
        <>
          {" "}
          <div className="bg-white">
            <span className="text-gray-400 italic">Refreshing Exchange Rates...</span>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left bg-black text-white w-14">Currency</th>
                  <th className="py-2 px-4 text-left bg-gray-900 text-white pl-10">Exchange Rate to {userCurrency}</th>
                </tr>
              </thead>
            </table>
          </div>
        </>
      )}
    </>
  );
};
