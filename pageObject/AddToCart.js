class AddToCart{ 
    constructor(page){ 
        this.page=page;
        this.navBook=page.locator(".top-menu li");
        this.selectBook= page.locator(".product-title")
        this.addToCart= page.locator("#add-to-cart-button-13")
        // this.shoppingCart=page.locator("#topcartlink")
    }

    async AddTheProductToCart(){ 
        await this.navBook.first().click();
        await this.selectBook.first().click();
        await this.addToCart.click();
    }
}

export default AddToCart;