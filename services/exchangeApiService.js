// Simule un appel à un service externe pour obtenir le taux de conversion
function getExchangeRate(from, to) {
  const rates = {
    EUR: { USD: 1.1 },
    USD: { EUR: 1 / 1.1, GBP: 0.8 },
    GBP: { USD: 1 / 0.8 }
  };

  if (!rates[from] || !rates[from][to]) {
    throw new Error("Unsupported currency pair");
  }

  return rates[from][to];
}

module.exports = { getExchangeRate };