class NavToCheckout {
  constructor(page) {
    this.page = page;
    this.shoppingCart = page.locator("#topcartlink");
    this.termsCheckbox = page.locator("#termsofservice");
    this.checkoutBtn = page.locator("#checkout");
  }

  async NavtoCheckout() {
    await this.shoppingCart.click();
    await this.termsCheckbox.check();
    await this.checkoutBtn.click();
  }
}

export default NavToCheckout;
