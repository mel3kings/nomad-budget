"use client";

import CreateTable from "@/pages/db/create_db";
import AddData from "@/pages/db/add_data";
import ViewData from "@/pages/db/view_data";

export default function Expense() {
  return (
    <div className="min-h-screen">
      <AddData />
      <ViewData />
    </div>
  );
}
