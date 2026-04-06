const UserService = require('./UserService');
const InventoryService = require('./InventoryService');
const PricingService = require('./PricingService');
const PaymentService = require('./PaymentService');
const NotificationService = require('./NotificationService');
const OrderService = require('./OrderService');

test('Flujo completo del sistema', async () => {
  const service = new OrderService(
    new UserService(),
    new InventoryService(),
    new PricingService(),
    new PaymentService(),
    new NotificationService()
  );

  const result = await service.createOrder(1, 1, 2, 50);

  expect(result).toHaveProperty('orderId');
  expect(result).toHaveProperty('total');
  expect(result).toHaveProperty('transactionId');
});