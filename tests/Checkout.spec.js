import {expect, test} from '@playwright/test'
import Main from '../pageObject/Main.js';
const dataSet = JSON.parse(
  JSON.stringify(require("./utils/userInfo.json"))
);


test("Checkout", async({page})=>{ 

    const main = new Main(page);
    const login= main.getLoginPage();
    const continueButton=main.clickContinueBtn();
    const addToCart= main.getAddToCartPage();
    const navCheckout= main.navigateToCheckout();
    const billingAdd= main.checkoutBillingAddress();
    const shippingMeth=main.checkoutShippingMethod();
    const paymentMeth= main.checkoutPaymentMethod();
    const paymentInfo=main.checkoutPaymentInfo();
     //Login Details 
    const email="avishkar123@gmail.com";
    const password="123456789";

    await login.goto();
    await login.gotoLoginPage();
    await login.loginDetails(email,password)

    //shopping cart count
    const count= await page.locator("#topcartlink .cart-qty").innerText()
    let number = Number(count.replace(/[()]/g, "")) 
    console.log(number);

    //Add the book to cart 
    await addToCart.AddTheProductToCart();

    //navigate to checkout 
    await navCheckout.NavtoCheckout();

    //Checkout 

    //Billing Address
    const addressDropdown=page.locator(".address-select")

    if(await addressDropdown.isVisible()){ 
        await continueButton.continueBtn().nth(0).click();
    }
    else{ 
        await billingAdd.setBillingAddress(dataSet.company,dataSet.city,dataSet.address1,dataSet.zip,dataSet.phone);
        await continueButton.continueBtn().nth(0).click();
    }
    
    //Shipping Address
    // await page.waitForTimeout(300)
    await continueButton.continueBtn().nth(1).click();

    //Shipping Method
    await shippingMeth.setGround();
     await continueButton.continueBtn().nth(2).click();

    //Payment Method
    await paymentMeth.setCashOnDelivery();
    await continueButton.continueBtn().nth(3).click();

    //Payment Info -cod
     await continueButton.continueBtn().nth(4).click();
    

    //Payment Info
    

    //confirm Order
    

    await page.screenshot({path:"screenshot/order.png"});

})