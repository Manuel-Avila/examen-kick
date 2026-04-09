class OrderController {
  constructor(orderService) {
    this.orderService = orderService;
  }

  async createOrder(req) {
    try {
      const order = await this.orderService.createOrder(
        req.userId,
        req.productId,
        req.quantity,
        req.price
      );

      return {
        status: 'success',
        data: order // Error 1 corregido: regresaba order.data y ahora regresa el objeto directamente
      };

    } catch (error) {
      return {
        status: 'error',
        message: error.message
      };
    }
  }
}

module.exports = OrderController;