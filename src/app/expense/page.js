"use client";

// import CreateTable from "@/pages/db/create_db";
import AddData from "@/pages/db/add_data";
import ViewData from "@/pages/db/view_data";
import { CurrencyRates } from "../common/display-utils";

export default function Expense() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <AddData />
        </div>
        <div className="col-span-3">
          <ViewData />
        </div>
        <div className="col-span-1">
          <CurrencyRates response={""} />
        </div>
      </div>
    </div>
  );
}
