"use client";

import Image from "next/image";
import { useEffect } from "react";
import { TopNav } from "./common/top-nav";
import { BottomNav } from "./common/bottom-nav";

export default function Home() {
  useEffect(() => {
    console.log("testing");
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-90">
        <TopNav />
      </div>
      <BottomNav />
    </main>
  );
}
