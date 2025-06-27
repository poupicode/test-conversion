const { convertCurrency } = require('../../services/conversionService');

describe('convertCurrency', () => {
    test('EUR to USD', () => {
        expect(convertCurrency('EUR', 'USD', 100)).toBe(110);
    });

    test('USD to EUR', () => {
        expect(convertCurrency('USD', 'EUR', 110)).toBeCloseTo(100);
    });

    test('USD to GBP', () => {
        expect(convertCurrency('USD', 'GBP', 100)).toBe(80);
    });

    test('GBP to USD', () => {
        expect(convertCurrency('GBP', 'USD', 80)).toBe(100);
    });

    test('throws on negative amount', () => {
        expect(() => convertCurrency('EUR', 'USD', -5)).toThrow();
    });

    test('throws on unsupported pair', () => {
        expect(() => convertCurrency('GBP', 'EUR', 100)).toThrow();
    });
});