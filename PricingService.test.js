const PricingService = require('./PricingService');

describe('PricingService', () => {
  let service;

  beforeEach(() => {
    service = new PricingService();
  });

  test('Subtotal correcto', () => {
    expect(service.calculateSubtotal(10, 2)).toBe(20);
  });

  test('Impuesto correcto', () => {
    expect(service.calculateTax(100)).toBe(10);
  });

  test('Precio final con descuento', () => {
    const result = service.calculateFinalPrice(100, 2); // 200 + tax = 220
    expect(result).toBeLessThan(220);
  });
});