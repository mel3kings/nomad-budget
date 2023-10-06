"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { CurrenciesDropdown } from "../user/user-currency-dropdown";
import Image from "next/image";

export const TopNav = () => {
  const { user } = useUser();
  return (
    <nav className="bg-gradient-to-r from-green-800 to-dark-green to-60% flex w-full items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/">
          <Image className="pr-1" src="/nomad_budget_no_bg_white.svg" alt="logo" height={35} width={35} />
        </a>
        <span className="font-semibold text-xl tracking-tight hidden sm:inline-block">
          <a href="/">Nomad Budget</a>
        </span>
        <div className="block lg:hidden">
          {user && (
            <a href="/expense" className="mt-4 lg:block lg:mt-0 text-white hover:text-white mx-4">
              Add Expense
            </a>
          )}
        </div>
        <div className="block lg:hidden">
          {user && (
            <a href="/reports" className="mt-4 lg:block lg:mt-0 text-white hover:text-white mr-4">
              Reports
            </a>
          )}
        </div>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block">
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
              <a
                href="https://amzn.to/3PsMRhD"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                target="_blank"
              >
                How to Become a Digital Nomad
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
