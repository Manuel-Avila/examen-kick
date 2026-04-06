const OrderService = require('./OrderService');
const UserService = require('./UserService');
const InventoryService = require('./InventoryService');
const PricingService = require('./PricingService');
const PaymentService = require('./PaymentService');
const NotificationService = require('./NotificationService');

describe('OrderService Integration', () => {
  let service;

  beforeEach(() => {
    service = new OrderService(
      new UserService(),
      new InventoryService(),
      new PricingService(),
      new PaymentService(),
      new NotificationService()
    );
  });

  test('Orden válida', async () => {
    const result = await service.createOrder(1, 1, 2, 50);

    expect(result.orderId).toBeDefined();
    expect(result.total).toBeGreaterThan(0);
  });

  test('Usuario inválido', async () => {
    await expect(service.createOrder(999, 1, 2, 50))
      .rejects.toThrow();
  });

  test('Sin stock', async () => {
    await expect(service.createOrder(1, 2, 100, 50))
      .rejects.toThrow('Out of stock');
  });
});