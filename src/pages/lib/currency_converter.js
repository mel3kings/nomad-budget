// alternative: https://open.er-api.com/v6/latest/USD
import MoneyObject from "./money";

export async function convertCurrency(fromMoney, toCurrency) {
  try {
    console.log(`recieved ${fromMoney.currency} ${toCurrency}`);
    const api = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromMoney.currency}`);
    const response = await api.json();
    const exchangeRate = response.rates[toCurrency];
    const convertedValue = fromMoney.amount * exchangeRate;
    const convertedMoney = new MoneyObject(toCurrency, convertedValue);
    return convertedMoney;
  } catch (error) {
    console.error(error);
    return fromMoney;
  }
  return;
}
