const PaymentService = require('./PaymentService');

describe('PaymentService', () => {
  let service;

  beforeEach(() => {
    service = new PaymentService();
  });

  test('Pago válido', async () => {
    const result = await service.processPayment(100);
    expect(result.status).toBe('success');
  });

  test('Pago inválido', async () => {
    await expect(service.processPayment(0)).rejects.toThrow();
  });
});