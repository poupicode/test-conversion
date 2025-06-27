function calculTVA(ht, taux) {
  if (ht < 0 || taux < 0) throw new Error("HT and taux must be non-negative");
  return Number((ht + ht * taux / 100).toFixed(2));
}

function calculRemise(prix, pourcentage) {
  if (prix < 0 || pourcentage < 0) throw new Error("Prix and pourcentage must be non-negative");
  return Number((prix - prix * pourcentage / 100).toFixed(2));
}

module.exports = { calculTVA, calculRemise };