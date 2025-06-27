const { convertCurrency } = require('../../services/conversionService');
const exchangeApiService = require('../../services/exchangeApiService');

jest.mock('../../services/exchangeApiService'); // on remplace la vraie fonction par un mock

describe('Integration: convertCurrency with mocked exchange API', () => {
  test('should use mocked exchange rate', () => {
    exchangeApiService.getExchangeRate.mockReturnValue(1.5); // on simule un taux fictif

    const result = convertCurrency('EUR', 'USD', 100);
    expect(result).toBe(150);
    expect(exchangeApiService.getExchangeRate).toHaveBeenCalledWith('EUR', 'USD');
  });

  test('should throw if mocked service throws', () => {
    exchangeApiService.getExchangeRate.mockImplementation(() => {
      throw new Error("Mocked service failure");
    });

    expect(() => convertCurrency('EUR', 'USD', 100)).toThrow("Mocked service failure");
  });
});