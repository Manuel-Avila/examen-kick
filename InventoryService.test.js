const InventoryService = require('./InventoryService');

describe('InventoryService', () => {
  let service;

  beforeEach(() => {
    service = new InventoryService();
  });

  test('Stock disponible', () => {
    expect(service.checkStock(1, 2)).toBe(true);
  });

  test('Producto inexistente', () => {
    expect(() => service.checkStock(999, 1)).toThrow('Product not found');
  });

  test('Reducir stock correctamente', () => {
    const result = service.reduceStock(1, 2);
    expect(result.quantity).toBe(8);
  });

  test('Reducir más stock del disponible', () => {
    expect(() => service.reduceStock(2, 10)).toThrow('Insufficient stock');
  });
});