"use client";
import AddData from "@/pages/db/add_data";
import ViewData from "@/pages/db/view_data";
import { CurrencyRates } from "../user/user-currency-rates";
import { Nunito } from "next/font/google";
import { useEffect, useState } from "react";
const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });

export default function Expense() {
  const [entries, setEntries] = useState(0);

  useEffect(() => {}, [entries]);
  return (
    <div className={`min-h-screen ${nunito.className}`}>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <AddData setEntries={setEntries} />
        </div>
        <div className="col-span-3">
          <ViewData entries={entries} setEntries={setEntries} />
        </div>
        <div className="col-span-1 pt-2">
          <CurrencyRates />
        </div>
      </div>
    </div>
  );
}
