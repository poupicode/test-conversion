const { convertCurrency } = require('../services/conversionService');

function handleConversion(req, res) {
  const { from, to, amount } = req.query;
  const amountNum = Number(amount);

  if (!from || !to || isNaN(amountNum) || amountNum < 0) {
    return res.status(400).json({ error: 'Invalid parameters' });
  }

  try {
    const result = convertCurrency(from, to, amountNum);
    return res.json({
      from,
      to,
      originalAmount: amountNum,
      convertedAmount: result
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

module.exports = { handleConversion };