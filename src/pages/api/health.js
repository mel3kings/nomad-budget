// https://nextjs.org/docs/pages/building-your-application/routing/api-routes
// https://nextjs.org/docs/getting-started/project-structure

import { CURRENCIES } from "@/pages/lib/utils";
import { convertCurrency } from "@/pages/lib/exchange_rate";
import MoneyObject from "../lib/money";

export default async function handler(req, res) {
  const audMoney = new MoneyObject(CURRENCIES.AUD, 100.0);
  const vndMoney = await convertCurrency(audMoney, CURRENCIES.VND);
  res.status(200).json({ message: `Testing converted amount is ${vndMoney.amount}` });
}
