"use client";

// import CreateTable from "@/pages/db/create_db";
import AddData from "@/pages/db/add_data";
import ViewData from "@/pages/db/view_data";
import { CurrencyRates } from "../user/user-currency-rates";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });

export default function Expense() {
  return (
    <div className={`min-h-screen ${nunito.className}`}>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <AddData />
        </div>
        <div className="col-span-3">
          <ViewData />
        </div>
        <div className="col-span-1">
          <CurrencyRates />
        </div>
      </div>
    </div>
  );
}
