"use client";

import { useState, useEffect, useContext } from "react";
import { CurrencyContext } from "../currency-context";
import { FormatDateFromLongFormat, DisplayCurrency } from "../common/display-utils";
import { GetExchangeRates } from "@/app/utils/exchange_rate";
import { Nunito } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";
import { UserConversion } from "./user-conversion";
import { RecentVideos } from "../utils/recent_videos";

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
        <div className="">
          {/* {user && ( */}
          <div className="pb-4 flex justify-center item-center">
            <UserConversion />
          </div>
          {/* )} */}

          <table className="w-full">
            <thead>
              <tr>
                <th className={`py-2 px-4 text-left bg-stone-700  text-white w-14 rounded-t-lg ${nunito.className}`}>
                  Currency
                </th>
                <th className={`py-2 pr-4  bg-stone-600 text-white pl-10 rounded-t-lg ${nunito.className}`}>
                  Exchange Rate {userCurrency} ({FormatDateFromLongFormat(response.time_last_updated)})
                </th>
              </tr>
            </thead>
          </table>
          <table
            className={`flex flex-col min-h-64 max-h-96 overflow-y-auto ${nunito.className} 
h-full w-full bg-green-600 rounded-md bg-clip-padding backdrop-filter text-white backdrop-blur-md bg-opacity-10 font-bold`}
          >
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
          <div className="py-4 hidden sm:block pl-4">
            <span className={`text-lg bg-emerald-700 p-1 px-2 rounded-t-md font-bold text-white ${nunito.className}`}>
              Watch the Demo Here:
            </span>
            <iframe
              className="rounded-b-lg rounded-r-lg"
              src="https://www.youtube.com/embed/caQxVcE24Ok"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          {/* <div className="video-responsive mx-5 my-20">
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/caQxVcE24Ok"
              allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div> */}
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
