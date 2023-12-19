"use client";

import { useState, useEffect, useContext } from "react";
import { CurrencyContext } from "../currency-context";
import { CurrencyExpenseSelect, GetAlpha3Code } from "../common/display-utils";
import { DisplayCurrency, GetCountryFromCurrency } from "../common/display-utils";
import { styles } from "../common/styles";
import { GetExchangeRates } from "@/app/utils/exchange_rate";
import CurrencyInput from "react-currency-input-field";
import moment from "moment";

import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });
export const UserConversion = () => {
  const { selectedCurrency } = useContext(CurrencyContext);
  const [isLinksDisplayed, setLinksDisplayed] = useState(false);
  const [amount, setAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0.0);
  const [userCurrency, setUserCurrency] = useState(selectedCurrency);

  useEffect(() => {
    const fetchCurrency = async () => {
      const apiResponse = await GetExchangeRates(selectedCurrency);
      const apiExchangeRate = apiResponse.rates[toCurrency];
      const cv = amount / apiExchangeRate;
      if (!isNaN(cv)) {
        setConvertedAmount(cv.toFixed(2));
      }
      setUserCurrency(selectedCurrency);
    };
    fetchCurrency();
  }, [amount, toCurrency, selectedCurrency]);
  return (
    <div
      className={`font-medium ${nunito.className} block w-full p-6 border border-gray-200 rounded-lg shadow bg-gray-200 border-gray-700`}
    >
      <span className="text-xl font-black pb-2">Conversion Rates</span>
      <div className="flex grid min-w-screen grid-cols-3 gap-1">
        <div className="col-span-1">
          <CurrencyExpenseSelect
            setSelectedCurrency={setToCurrency}
            selectedCurrency={toCurrency}
            shortForm={true}
            onChange={() => setLinksDisplayed(true)}
          />
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
            onValueChange={(value, name) => {
              setAmount(value);
            }}
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
      <div>{isLinksDisplayed && <SuggestedLookups toCurrency={toCurrency} userCurrency={userCurrency} />}</div>
    </div>
  );
};

const SuggestedLookups = ({ toCurrency, userCurrency }) => {
  const [location, setLocation] = useState("");
  useEffect(() => {
    const getLocation = async () => {
      try {
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };

    getLocation();
  }, []);

  const country = GetCountryFromCurrency(toCurrency);
  const from = moment(new Date()).add(1, "d").format("YYYY-MM-DD");
  const to = moment(new Date()).add(1, "M").format("YYYY-MM-DD");

  const toAlphaCode = GetAlpha3Code(toCurrency);
  const locality = GetAlpha3Code(userCurrency);

  return (
    <div>
      <div>
        {" "}
        Travelling to {country}? {location}
      </div>

      <div className="flex">
        {" "}
        <svg width="20px" height="20px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z"
              fill="#FF5A5F"
            ></path>{" "}
            <path
              d="M16.0003 19.6867C15.0825 18.5322 14.5426 17.5201 14.3626 16.6542C14.1826 15.9506 14.2546 15.3914 14.5605 14.9765C14.8845 14.4894 15.3704 14.2549 16.0003 14.2549C16.6302 14.2549 17.1162 14.4894 17.4401 14.9765C17.7461 15.3914 17.818 15.9506 17.6381 16.6542C17.4401 17.5382 16.9002 18.5484 16.0003 19.6867ZM21.0251 22.3566C19.4954 23.0241 17.9818 21.9597 16.686 20.5165C18.8295 17.8268 19.2254 15.7342 18.3058 14.3794C17.7659 13.6037 16.992 13.2248 16.0003 13.2248C14.0026 13.2248 12.903 14.9206 13.3349 16.8887C13.5869 17.9531 14.2528 19.1636 15.3146 20.5165C14.5182 21.4012 13.4733 22.4047 12.2191 22.519C10.4014 22.7896 8.97781 21.0217 9.62571 19.1978L14.2348 9.63307C14.6282 8.91403 15.1137 8.29812 15.9985 8.29812C16.6464 8.29812 17.1503 8.67696 17.3663 8.98363L22.3713 19.1978C22.8617 20.432 22.2398 21.8308 21.0251 22.3566ZM23.3468 18.837L19.0617 9.90367C18.2518 8.244 17.6759 7.25 16.0003 7.25C14.3446 7.25 13.6409 8.40455 12.921 9.90367L8.65386 18.837C7.73601 21.3644 9.62571 23.5833 11.9132 23.5833C12.0572 23.5833 12.2001 23.5653 12.3451 23.5653C13.5329 23.421 14.7585 22.6633 16.0003 21.3085C17.2421 22.6615 18.4677 23.421 19.6556 23.5653C19.8006 23.5653 19.9435 23.5833 20.0875 23.5833C22.3749 23.5851 24.2646 21.3644 23.3468 18.837Z"
              fill="white"
            ></path>{" "}
          </g>
        </svg>
        <a
          href={`https://www.airbnb.com.au/s/${country}/homes?adults=1&checkin=${from}&checkout=${to}`}
          target="_blank"
          className="underline pl-1"
        >
          Airbnb
        </a>
      </div>
      <div className="flex">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Google"
          role="img"
          viewBox="0 0 512 512"
          width="20px"
          height="20px"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <rect width="512" height="512" rx="15%" fill="#ffffff"></rect>
            <path fill="#4285f4" d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"></path>
            <path fill="#34a853" d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"></path>
            <path fill="#fbbc02" d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"></path>
            <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"></path>
          </g>
        </svg>
        <a
          href={`https://www.google.com/search?q=${country}+flights+${to}&oq=${country}+flights+${to}`}
          target="_blank"
          className="underline pl-1"
        >
          Google Flights
        </a>
      </div>
      <div className="flex">
        {" "}
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M9.75 13C9.75 11.7574 10.7574 10.75 12 10.75C13.2426 10.75 14.25 11.7574 14.25 13C14.25 14.2426 13.2426 15.25 12 15.25C10.7574 15.25 9.75 14.2426 9.75 13Z"
              fill="#1C274D"
            ></path>{" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 18.6943V4.69434C4 5.24662 4.44772 5.69434 5 5.69434H17C18.6569 5.69434 20 7.03748 20 8.69434V18.6943C20 20.3512 18.6569 21.6943 17 21.6943H7C5.34315 21.6943 4 20.3512 4 18.6943ZM8.25 13C8.25 10.9289 9.92893 9.25 12 9.25C14.0711 9.25 15.75 10.9289 15.75 13C15.75 15.0711 14.0711 16.75 12 16.75C9.92893 16.75 8.25 15.0711 8.25 13ZM9.25 19C9.25 18.5858 9.58579 18.25 10 18.25H14C14.4142 18.25 14.75 18.5858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75H10C9.58579 19.75 9.25 19.4142 9.25 19Z"
              fill="#1C274D"
            ></path>{" "}
            <path
              opacity="0.5"
              d="M18 4.00038V5.86504C17.6872 5.75449 17.3506 5.69434 17 5.69434H5C4.44772 5.69434 4 5.24662 4 4.69434V4.62329C4 4.09027 4.39193 3.63837 4.91959 3.56299L15.7172 2.02048C16.922 1.84835 18 2.78328 18 4.00038Z"
              fill="#1C274D"
            ></path>{" "}
          </g>
        </svg>
        <a
          href={`https://apply.joinsherpa.com/travel-restrictions/${toAlphaCode}?affiliateId=sherpa&language=en-US&nationality=${locality}&departureDate=${from}&tripType=oneWay&fullyVaccinated=true`}
          target="_blank"
          className="underline pl-1"
        >
          Visa Requirements
        </a>
      </div>
    </div>
  );
};
