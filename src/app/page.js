"use client";

import { Nunito } from "next/font/google";
import { Inter } from "next/font/google";
import { FeaturingSites } from "./common/featuring-sites";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CurrencyRates } from "./user/user-currency-rates";
import Image from "next/image";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "800", "900"] });

export default function Home() {
  const { user } = useUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className={`w-full h-90 font-normal ${inter.className}`}>
        <div className="grid min-h-screen grid-cols-3 gap-7 lg:px-20 px-10 py-10">
          <div className="lg:col-span-2 lg:row-span-2 col-span-3">
            <div className="h-3/4 flex justify-center items-center">
              <div className={`text-5xl pt-10 md:text-7xl block ${inter.className}`}>
                <div className="flex pb-2">
                  <span className={`drop-shadow-lg font-bold pr-2`}>Nomad</span>
                  <span className="text-green-700 font-bold drop-shadow-lg shadow-gray-400">Budget</span>
                  <Image
                    className="hidden md:block"
                    src="/nomad_budget_no_bg_green.svg"
                    alt="logo"
                    height={65}
                    width={65}
                  />
                </div>
                <p className={`text-sm justify-center flex font-semibold text-xl ${nunito.className}`}>
                  Track your Global Expense 🌍
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 lg:row-span-2 col-span-3">
            <CurrencyRates />
          </div>

          <DisplayCard
            header="Record Expenses in Any Currency"
            subHeader="Effortlessly track your expenses in any currency, no matter where your wanderlust takes you."
          />
          <DisplayCard
            header="Instantly Convert to Your Home Currency"
            subHeader="Seamlessly stay on top of your budget by converting expenses to your preferred currency with a single tap."
          />
          <DisplayCard
            header="Generate Reports Across Currencies"
            subHeader="Gain valuable insights into your spending habits across multiple currencies with comprehensive reports"
          />
        </div>

        <div className="" id="demo">
          <iframe className="p-10 w-full min-h-screen" src="https://www.youtube.com/embed/9Bn5y3zXODM"></iframe>
        </div>

        <div className={`bg-dark-green min-h-screen ${nunito.className} p-10 pt-20`} id="features">
          <h1 className="text-3xl lg:text-7xl font-bold text-white drop-shadow-xl [text-shadow:_1px_1px_0_var(--tw-shadow-color)] shadow-gray-400 pb-20">
            Features
          </h1>
          <br />
          <FeatureCard header="Seamless Integration with Google" subHeader="Seamless Integration with Google" />
          <FeatureCard
            header="Security Measures"
            subHeader="Protecting Your Privacy with Zero Sensitive Data Storage"
          />
          <FeatureCard header="Cost Free Expense Tracking" subHeader="No Cost for Basic Usage" />
        </div>
        <div className="min-h-screen bg-gradient-to-t to-dark-green flex justify-center items-center">
          <span className="text-3xl lg:text-5xl font-bold text-black bg-gradient-to-r from-dark-green to-green-500 inline-block text-transparent bg-clip-text drop-shadow-md p-5">
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
        <div className={`${nunito.className} text-2xl text-black p-10 pt-20`} id="connect">
          <FeaturingSites />
        </div>
      </div>
    </main>
  );
}

const DisplayCard = ({ header, subHeader }) => {
  return (
    <div className={`${nunito.className} text-xl lg:col-span-1 col-span-3`}>
      {" "}
      <p className="font-bold flex flex-row">
        {header}
        <Image className="pr-1" src="/nomad_budget_no_bg_green.svg" alt="logo" height={35} width={35} />
      </p>
      <p>{subHeader}</p>
    </div>
  );
};

const FeatureCard = ({ header, subHeader }) => {
  return (
    <div className="text-3xl md:text-6xl font-bold text-white drop-shadow-xl [text-shadow:_1px_1px_0_var(--tw-shadow-color)] shadow-gray-400 pb-10">
      <h1>{header}</h1>
      <h2 className="text-2xl md:text-4xl">{subHeader}</h2>
    </div>
  );
};
