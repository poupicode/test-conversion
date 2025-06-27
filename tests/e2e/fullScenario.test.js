const request = require('supertest');
const app = require('../../app');

describe('E2E: Convert amount then calculate TVA', () => {
  test('should convert EUR -> USD and calculate TVA', async () => {
    // Étape 1 : Convertir 100 EUR -> USD
    const conversionResponse = await request(app)
      .get('/convert?from=EUR&to=USD&amount=100');

    expect(conversionResponse.statusCode).toBe(200);
    expect(conversionResponse.body).toHaveProperty('convertedAmount');

    const converted = conversionResponse.body.convertedAmount;
    expect(converted).toBe(110); // taux fixe : 1 EUR = 1.1 USD

    // Étape 2 : Calculer la TVA sur ce montant
    const tvaResponse = await request(app)
      .get(`/tva?ht=${converted}&taux=20`);

    expect(tvaResponse.statusCode).toBe(200);
    expect(tvaResponse.body).toEqual({
      ht: 110,
      taux: 20,
      ttc: 132
    });
  });
});