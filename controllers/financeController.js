const { calculTVA, calculRemise } = require('../services/financeService');

function handleTVA(req, res) {
  const ht = Number(req.query.ht);
  const taux = Number(req.query.taux);

  if (isNaN(ht) || isNaN(taux) || ht < 0 || taux < 0) {
    return res.status(400).json({ error: 'Invalid parameters' });
  }

  try {
    const ttc = calculTVA(ht, taux);
    return res.json({ ht, taux, ttc });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

function handleRemise(req, res) {
  const prix = Number(req.query.prix);
  const pourcentage = Number(req.query.pourcentage);

  if (isNaN(prix) || isNaN(pourcentage) || prix < 0 || pourcentage < 0) {
    return res.status(400).json({ error: 'Invalid parameters' });
  }

  try {
    const prixFinal = calculRemise(prix, pourcentage);
    return res.json({ prixInitial: prix, pourcentage, prixFinal });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

module.exports = { handleTVA, handleRemise };