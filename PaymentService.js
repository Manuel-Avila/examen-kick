class PaymentService {
  async processPayment(amount) {
    // Error 3 corregido: No tiraba un errror y ahora si lo hace
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