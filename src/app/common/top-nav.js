"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { CurrenciesDropdown } from "../user/user-currency-dropdown";

export const TopNav = () => {
  const { user } = useUser();
  return (
    <nav className="bg-gradient-to-r from-green-800 to-dark-green to-60% flex w-full items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="pr-1" src="/nomad_budget_no_bg_white.svg" alt="logo" height={35} width={35} />
        <span className="font-semibold text-xl tracking-tight">
          <a href="/">Nomad Budget</a>
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm xl:flex-grow">
          {!user && (
            <>
              <a href="#demo" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                Demo
              </a>
              <a href="#features" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                Features
              </a>
              <a href="#connect" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                Connect
              </a>
            </>
          )}

          {user && (
            <>
              <a href="/expense" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                Add Expense
              </a>
              <a href="/reports" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
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
              <span className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
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
