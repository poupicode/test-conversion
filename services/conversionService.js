const { getExchangeRate } = require('./exchangeApiService');

function convertCurrency(from, to, amount) {
  if (amount < 0) throw new Error("Amount must be non-negative");

  const rate = getExchangeRate(from, to);
  return Number((amount * rate).toFixed(2));
}

module.exports = { convertCurrency };