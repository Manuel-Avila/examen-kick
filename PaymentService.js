class PaymentService {
  async processPayment(amount) {
    if (amount <= 0) {
      throw new Error('Invalid payment amount');
    }

    return {
      status: 'success',
      transactionId: Math.floor(Math.random() * 10000)
    };
  }
}

module.exports = PaymentService;