class PaymentMethod {
  constructor(page) {
    this.page = page;
    this.cod = page.getByRole('radio', { name: 'Cash On Delivery (COD) (7.00' });
    this.moneyOrder = page.getByRole('radio', { name: 'Check / Money Order (5.00)' });
    this.creditCard = page.getByRole('radio', { name: 'Credit Card Credit Card' });
    this.pOrder = page.getByRole('radio', { name: 'Purchase Order Purchase Order' });
  }

  async setCashOnDelivery() {
    await this.cod.click();
  }
  async setMoneyOrder() {
    await this.moneyOrder.click();
  }
  async setCreditCard() {
    await this.creditCard.click();
  }
  async setPOrder() {
    await this.pOrder.click();
  }
}

export default PaymentMethod;
