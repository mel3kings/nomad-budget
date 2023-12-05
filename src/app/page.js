"use client";

import { Nunito } from "next/font/google";
import { Inter } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CurrencyRates } from "./user/user-currency-rates";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Image from "next/image";

ReactGA.initialize("G-64K0B09XKZ");
const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "800", "900"] });

export default function Home() {
  const { user } = useUser();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Nomad Budget Home" });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className={`w-full h-90 font-normal ${inter.className}`}>
        <div className="grid h-[90vh] grid-cols-3 gap-7 lg:px-20 px-10 pt-4">
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
                  Track your Global Finances 🌍
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:row-span-2 col-span-3">
            <CurrencyRates />
          </div>
        </div>

        {/* <div className="" id="demo ">
          <iframe className="p-10 w-full min-h-screen" src="https://www.youtube.com/embed/caQxVcE24Ok"></iframe>
        </div> */}

        <div className="video-responsive mx-5 my-20">
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/caQxVcE24Ok"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>

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
        <div id="connect" className="h-[80vh] bg-gradient-to-t to-dark-green flex justify-center items-center">
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
