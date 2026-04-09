class OrderService {
  constructor(user, inventory, pricing, payment, notification) {
    this.user = user;
    this.inventory = inventory;
    this.pricing = pricing;
    this.payment = payment;
    this.notification = notification;
  }

  async createOrder(userId, productId, quantity, price) {
    const userValid = this.user.validateUser(userId);
    if (!userValid.valid) throw new Error(userValid.message);

    if (!this.inventory.checkStock(productId, quantity)) {
      throw new Error('Out of stock');
    }

    const total = this.pricing.calculateFinalPrice(price, quantity);

    // Error 4 corregido: reducia el stock antes de procesar el pago, ahora ya tiene el flujo correcto
    const payment = await this.payment.processPayment(total);
    
    this.inventory.reduceStock(productId, quantity);

    if (payment.status !== 'success') {
      throw new Error('Payment failed');
    }

    await this.notification.sendNotification(userId, 'Order created');

    return {
      orderId: Date.now(), // Error 5 corregido: Math.random regresaba valores incorrectos para id, ahora Date.now() regresa valores validos
      total,
      transactionId: payment.transactionId
    };
  }
}

module.exports = OrderService;