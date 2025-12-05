class PaymentMethod {
  constructor(page) {
    this.page = page;
    this.cod = page.locator("#paymentmethod_0");
    this.moneyOrder = page.locator("#paymentmethod_1");
    this.creditCard = page.locator("#paymentmethod_2");
    this.pOrder = page.locator("#paymentmethod_3");
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
