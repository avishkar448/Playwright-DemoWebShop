class NavToCheckout {
  constructor(page) {
    this.page = page;
    this.shoppingCart = page.getByRole('link', { name: /Shopping cart \(\d+\)/ });
    this.termsCheckbox = page.locator('#termsofservice');
    this.checkoutBtn = page.getByRole('button', { name: 'Checkout' });
  }

  async NavtoCheckout() {
    await this.shoppingCart.click();
    await this.termsCheckbox.check();
    await this.checkoutBtn.click();
  }
}

export default NavToCheckout;
