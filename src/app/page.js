"use client";

import { Anton, Libre_Baskerville, Nunito } from "next/font/google";
import { Inter } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CurrencyRates } from "./user/user-currency-rates";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Image from "next/image";
import SVGBackground from "./common/svgpattern";

ReactGA.initialize("G-64K0B09XKZ");
const nunito = Nunito({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"] });
const inter = Inter({ subsets: ["latin"], weight: ["400"] });
const anton = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  const { user } = useUser();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Nomad Budget Home" });
  }, []);
  return (
    <main className="bg-gray-400">
      <div className={`w-full h-90 font-normal ${inter.className} `}>
        <div className="h-[90vh] bg-red-100 banner banner-1">
          <div className="h-3/4 flex justify-center items-center w-3/4">
            <div className={`text-5xl p-2 md:text-7xl block ${anton.className} bg-emerald-950 rounded-lg`}>
              <div className="flex pb-2 ">
                <span className={`drop-shadow-lg text-white font-bold pr-2`}>Nomad</span>
                <span className="text-green-200 font-bold drop-shadow-lg shadow-gray-400">Budget</span>
                <Image
                  className="hidden md:block"
                  src="/nomad_budget_no_bg_green.svg"
                  alt="logo"
                  height={5}
                  width={65}
                />
              </div>
              <p className={`text-sm text-white justify-center flex font-semibold text-xl ${nunito.className}`}>
                Track your Global Finances 🌍
              </p>
            </div>
          </div>

          <div className="flex item-end justify-end align-end pt-2">
            <CurrencyRates />
          </div>
        </div>

        {/* <div className="" id="demo ">
          <iframe className="p-10 w-full min-h-screen" src="https://www.youtube.com/embed/caQxVcE24Ok"></iframe>
        </div> */}

        <div className={`bg-dark-green min-h-screen ${nunito.className} p-10 pt-20`} id="features">
          <h1 className="text-3xl lg:text-7xl font-bold text-white drop-shadow-xl [text-shadow:_1px_1px_0_var(--tw-shadow-color)] shadow-gray-400 pb-20">
            Features
          </h1>
          <br />
          <FeatureCard
            header="Seamless Integration 3rd Party Integration"
            subHeader="Auto Suggest on Airbnb bookings, Google flights, and Visa Requirements"
          />
          <FeatureCard
            header="Security Measures"
            subHeader="Protecting Your Privacy with Zero Sensitive Data Storage"
          />
          <FeatureCard header="Cost Free Expense Tracking" subHeader="No Cost for Basic Usage" />
        </div>
        <div id="connect" className={`h-[80vh] bg-stone-200 flex justify-center items-center ${nunito.className}`}>
          <span className="text-3xl lg:text-6xl font-black text-black bg-gradient-to-r from-dark-green to-emerald-600 inline-block text-transparent bg-clip-text drop-shadow-md p-5">
            Are you Ready to Take Control of Your Finances?
            <h2 className="flex text-xl lg:text-3xl justify-center items-center font-medium">
              Create your account here and start tracking your finances globally
            </h2>
            <span className="flex justify-center items-center pt-5">
              {!user && (
                <a
                  href="/api/auth/login"
                  className="flex text-xl items-center justify-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg font-medium px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Get Started
                </a>
              )}
            </span>
          </span>
        </div>
      </div>
    </main>
  );
}

const FeatureCard = ({ header, subHeader }) => {
  return (
    <div className="text-3xl md:text-6xl font-bold text-white drop-shadow-xl [text-shadow:_1px_1px_0_var(--tw-shadow-color)] shadow-gray-400 pb-10">
      <h1>{header}</h1>
      <h2 className="text-2xl md:text-4xl">{subHeader}</h2>
    </div>
  );
};
