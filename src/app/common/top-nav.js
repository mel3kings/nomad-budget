"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { CurrenciesDropdown } from "../user/user-currency-dropdown";
import Image from "next/image";

export const TopNav = () => {
  const { user } = useUser();
  return (
    <nav className="bg-gradient-to-r from-green-800 to-dark-green to-60% flex w-full h-[5vh] items-center justify-between flex-wrap px-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/">
          <Image className="pr-1" src="/nomad_budget_no_bg_white.svg" alt="logo" height={20} width={20} />
        </a>
        <span className="font-semibold text-xl tracking-tight hidden sm:inline-block">
          <a href="/">Nomad Budget</a>
        </span>
      </div>
      <div className="flex sm:block lg:hidden flex-row justify-end space-x-1">
        {user ? (
          <>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:underline">
              <CurrenciesDropdown />
            </span>
            <a
              href="/expense"
              className="block mt-4 border rounded border-white px-5 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:underline rounded-lg"
            >
              Add
            </a>
            <a
              href="/reports"
              className="block mt-4 border rounded border-white px-5 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:underline rounded-lg"
            >
              Reports
            </a>
          </>
        ) : (
          <a
            href="/api/auth/login"
            className="inline-block text-sm px-2
             py-1 leading-none border
              rounded text-white border-white hover:border-transparent 
              hover:text-teal-500 hover:bg-white m-0.5 lg:mt-0"
          >
            Get Started
          </a>
        )}
      </div>
      {/* FULL VIEW BELOW */}

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block">
        <div className="text-sm xl:flex-grow">
          {!user && (
            <>
              <a
                href="#demo"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:underline"
              >
                Demo
              </a>
              <a
                href="#features"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:underline"
              >
                Features
              </a>
              <a
                href="#connect"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:underline"
              >
                Connect
              </a>
              <a
                href="https://www.amazon.com/Golden-Visa-Strategies-Entrepreneurship-Citizenship/dp/B0CJL294G5"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:underline"
                target="_blank"
              >
                Handbook
              </a>
            </>
          )}

          {user && (
            <>
              <a
                href="/expense"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:underline"
              >
                Add Entry
              </a>
              <a
                href="/reports"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:underline"
              >
                Reports
              </a>
            </>
          )}
        </div>
        <div>
          {!user ? (
            <a
              href="/api/auth/login"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Get Started
            </a>
          ) : (
            <>
              <span className="block lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                <CurrenciesDropdown />
              </span>
              <span className="text-white pr-2">{user?.email}</span>
              <a
                href="/api/auth/logout"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Log out
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
