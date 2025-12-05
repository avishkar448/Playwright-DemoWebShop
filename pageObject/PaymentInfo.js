class PaymentInfo {
  constructor(page) {
    this.page = page;
    this.creaditCardType = page.locator("#CreditCardType");
    this.cardHolderName = page.locator("#CardholderName");
    this.cardNumber = page.locator("#CardNumber");
    this.expMonth = page.locator("#ExpireMonth");
    this.expYear = page.locator("#ExpireYear");
    this.cardCode = page.locator("#CardCode");
    this.poNumber = page.locator("#PurchaseOrderNumber");
  }

  async creaditCardInfo(cardType, cardHolder, cardNo, expM, expY, cardCode) {
    this.creaditCardType.selectOption(cardType);
    this.cardHolderName.fill(cardHolder);
    this.cardNumber.fill(cardNo);
    this.expMonth.selectOption(expM);
    this.expYear.selectOption(expY);
    this.cardCode.fill(cardCode);
  }

  async purchesOrderInfo(num) {
    this.poNumber.fill(num);
  }
}

export default PaymentInfo;
