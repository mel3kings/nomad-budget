"use client";

// import Image from "next/image";
import { Nunito } from "next/font/google";
import { Inter } from "next/font/google";
import { TopNav } from "./common/top-nav";
import { BottomNav } from "./common/bottom-nav";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "800", "900"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className={`w-full h-90 font-normal ${inter.className}`}>
        <TopNav />
        <div className="grid min-h-screen grid-cols-3 gap-7 p-5 px-20">
          <div className="col-span-3 row-span-3">
            <div className="h-full flex justify-center items-center">
              <div className="text-7xl block">
                <span className={`drop-shadow-lg ${inter.className} font-bold`}>Nomad</span>
                <span className="text-dark-green font-bold drop-shadow-lg [text-shadow:_1px_1px_0_var(--tw-shadow-color)] shadow-gray-400">
                  {" "}
                  Budget
                </span>
                <p className={`text-sm justify-center flex font-semibold text-xl ${nunito.className}`}>
                  Track your Global Expense
                </p>
              </div>
            </div>
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

        <div className="">
          <iframe className="p-10 w-full min-h-screen" src="https://www.youtube.com/embed/qpYjANhc2qI"></iframe>
        </div>

        <div className={`bg-dark-green min-h-screen ${nunito.className} p-10 pt-20`}>
          <h1 className="text-7xl font-bold text-white drop-shadow-xl [text-shadow:_1px_1px_0_var(--tw-shadow-color)] shadow-gray-400 pb-20">
            Features
          </h1>
          <br />
          <FeatureCard header="Seamless Integration with Google" subHeader="Seamless Integration with Google" />
          <FeatureCard
            header="Security Measuers"
            subHeader="Protecting Your Privacy with Zero Sensitive Data Storage"
          />
          <FeatureCard header="Cost Free Expense Tracking" subHeader="Cost Free Expense Tracking" />
        </div>
        <BottomNav />
      </div>
    </main>
  );
}

const DisplayCard = ({ header, subHeader }) => {
  return (
    <div className={`${nunito.className} text-xl`}>
      {" "}
      <p className="font-bold">{header}</p>
      <p>{subHeader}</p>
    </div>
  );
};

const FeatureCard = ({ header, subHeader }) => {
  return (
    <div className="text-6xl font-bold text-white drop-shadow-xl [text-shadow:_1px_1px_0_var(--tw-shadow-color)] shadow-gray-400 pb-10">
      <h1>{header}</h1>
      <h2 className="text-4xl">{subHeader}</h2>
    </div>
  );
};
