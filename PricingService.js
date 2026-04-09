class PricingService {
  calculateSubtotal(price, quantity) {
    return price * quantity;
  }

  calculateTax(amount) {
    return amount * 0.1;
  }

  // Error 2 corregido: Antes solo calculaba el descuento y ahora si lo aplica correctamente
  applyDiscount(amount) {
    if (amount > 200) return amount - (amount * 0.15);
    if (amount > 100) return amount - (amount * 0.1);
    return amount;
  }

  calculateFinalPrice(price, quantity) {
    const subtotal = this.calculateSubtotal(price, quantity);
    const tax = this.calculateTax(subtotal);
    return this.applyDiscount(subtotal + tax);
  }
}

module.exports = PricingService;