const request = require('supertest');
const app = require('../../app');

describe('API Routes Functional Tests', () => {
  // --- Conversion ---
  describe('GET /convert', () => {
    it('should convert EUR to USD correctly', async () => {
      const res = await request(app).get('/convert?from=EUR&to=USD&amount=100');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({
        from: 'EUR',
        to: 'USD',
        originalAmount: 100,
        convertedAmount: 110
      });
    });

    it('should return error for unsupported conversion', async () => {
      const res = await request(app).get('/convert?from=GBP&to=EUR&amount=100');
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error');
    });

    it('should reject negative amount', async () => {
      const res = await request(app).get('/convert?from=EUR&to=USD&amount=-10');
      expect(res.statusCode).toBe(400);
    });
  });

  // --- TVA ---
  describe('GET /tva', () => {
    it('should calculate correct TTC', async () => {
      const res = await request(app).get('/tva?ht=100&taux=20');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({
        ht: 100,
        taux: 20,
        ttc: 120
      });
    });

    it('should return 400 on invalid parameters', async () => {
      const res = await request(app).get('/tva?ht=-100&taux=20');
      expect(res.statusCode).toBe(400);
    });
  });

  // --- Remise ---
  describe('GET /remise', () => {
    it('should calculate correct final price after remise', async () => {
      const res = await request(app).get('/remise?prix=100&pourcentage=10');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({
        prixInitial: 100,
        pourcentage: 10,
        prixFinal: 90
      });
    });

    it('should return 400 if pourcentage is negative', async () => {
      const res = await request(app).get('/remise?prix=100&pourcentage=-5');
      expect(res.statusCode).toBe(400);
    });
  });
});