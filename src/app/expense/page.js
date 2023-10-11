"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { CurrencyRates } from "../user/user-currency-rates";
import { Nunito } from "next/font/google";
import { useEffect, useState } from "react";
import { ExpenseBreakdownTable } from "../reports/page";
import { QueryTable } from "../common/db-utils";
import AddData from "@/app/db/add_data";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });

const Expense = () => {
  const { user } = useUser();
  const [entries, setEntries] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {}, [entries]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (user) {
        const email = user?.email;
        const items = await QueryTable(email);
        setExpenses(items);
      }
    };
    fetchData();
    setLoading(false);
  }, [user]);

  return (
    <div className={`min-h-screen ${nunito.className}`}>
      <UserProvider>
        <div className="grid grid-cols-5">
          <div className="col-span-5 lg:col-span-1">
            <AddData setEntries={setEntries} />
          </div>
          <div className="hidden lg:block col-span-5 lg:col-span-3 pt-5">
            <ExpenseBreakdownTable isLoading={isLoading} expenses={expenses} />
          </div>
          <div className="hidden lg:block lg:col-span-1 pt-2">
            <CurrencyRates />
          </div>
        </div>
      </UserProvider>
    </div>
  );
};

export default Expense;
