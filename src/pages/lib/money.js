export default class MoneyObject {
  constructor(currency, amount) {
    this.amount = amount;
    this.currency = currency;
  }

  format() {
    return `${this.currency}${this.amount.toFixed(2)}`;
  }
}
