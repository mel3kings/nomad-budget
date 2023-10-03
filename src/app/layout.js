import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { TopNav } from "./common/top-nav";
import { BottomNav } from "./common/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nomad Budget",
  description: "Track your Global expense with Nomad Budget",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <TopNav />
          {children}
          <BottomNav />
        </body>
      </UserProvider>
    </html>
  );
}
