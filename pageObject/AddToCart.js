class AddToCart {
  constructor(page) {
    this.page = page;
    this.navBook =  page.getByRole('link', { name: 'Books' }).first();;
    this.selectBook = page.getByRole('link', { name: 'Computing and Internet', exact: true });
    this.addToCart = page.locator("#add-to-cart-button-13");
    // this.shoppingCart=page.locator("#topcartlink")
  }

  async AddTheProductToCart() {
    await this.navBook.click();
    await this.selectBook.click();
    await this.addToCart.click();
  }
}

export default AddToCart;
