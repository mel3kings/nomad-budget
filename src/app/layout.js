import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { TopNav } from "./common/top-nav";
import { BottomNav } from "./common/bottom-nav";
import { CurrencyProvider } from "./currency-context";
import SVGBackground from "./common/svgpattern";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nomad Budget",
  description: "Track your Global expense with Nomad Budget",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <CurrencyProvider>
          <body className={inter.className}>
            <SVGBackground />
            <TopNav />
            {children}
            <BottomNav />
          </body>
        </CurrencyProvider>
      </UserProvider>
    </html>
  );
}
