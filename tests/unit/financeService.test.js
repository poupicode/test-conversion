const { calculTVA, calculRemise } = require('../../services/financeService');

describe('calculTVA', () => {
  test('montant TTC simple', () => {
    expect(calculTVA(100, 20)).toBe(120);
  });

  test('valeurs négatives rejetées', () => {
    expect(() => calculTVA(-100, 20)).toThrow();
  });
});

describe('calculRemise', () => {
  test('application de remise', () => {
    expect(calculRemise(100, 10)).toBe(90);
  });

  test('valeurs négatives rejetées', () => {
    expect(() => calculRemise(100, -10)).toThrow();
  });
});