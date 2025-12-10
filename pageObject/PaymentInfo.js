class PaymentInfo {
  constructor(page) {
    this.page = page;
    this.creaditCardType = page.locator("#CreditCardType");
    this.cardHolderName = page.getByRole('textbox', { name: 'Cardholder name' });
    this.cardNumber = page.getByRole('textbox', { name: 'Card number' });
    this.expMonth = page.locator("#ExpireMonth");
    this.expYear = page.locator("#ExpireYear");
    this.cardCode = page.getByRole('textbox', { name: 'Card code' });
    this.poNumber = page.getByRole('textbox', { name: 'PO Number' });
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
