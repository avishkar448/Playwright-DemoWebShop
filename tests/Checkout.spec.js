import { expect, test } from "@playwright/test";
import Main from "../pageObject/Main.js";
const dataSet = JSON.parse(JSON.stringify(require("./utils/userInfo.json")));

test("Checkout", async ({ page }) => {
  const main = new Main(page);
  const login = main.getLoginPage();
  const continueButton = main.clickContinueBtn();
  const addToCart = main.getAddToCartPage();
  const navCheckout = main.navigateToCheckout();
  const billingAdd = main.checkoutBillingAddress();
  const shippingMeth = main.checkoutShippingMethod();
  const payment = main.checkoutPayment();

  await login.goto();
  await login.gotoLoginPage();
  await login.loginDetails(dataSet.email, dataSet.password);

  //shopping cart count
  const count = await page.locator("#topcartlink .cart-qty").innerText();
  let number = Number(count.replace(/[()]/g, ""));
  console.log(number);

  //Add the book to cart
  await addToCart.AddTheProductToCart();

  //wait
  await page.waitForLoadState("networkidle");

  //navigate to checkout
  await navCheckout.NavtoCheckout();

  //Checkout--Start

  //Billing Address
  const addressDropdown = page.locator("#billing-address-select");
  await page.waitForTimeout(1000)
  if (await addressDropdown.isVisible()) {
    await continueButton.continueBtn().nth(0).click();
  } else {
    await billingAdd.setBillingAddress(
      dataSet.company,
      dataSet.city,
      dataSet.address1,
      dataSet.zip,
      dataSet.phone
    );
    await continueButton.continueBtn().nth(0).click();
  }

  //Shipping Address
  await continueButton.continueBtn().nth(1).click();

  //Shipping Method
  await shippingMeth.setGround();
  await continueButton.continueBtn().nth(2).click();

  //Payment method and Information

  // await payment.CashOnDelivery();
  // await payment.PurchaseOrder(dataSet.PONumber)
  //   await payment.CreaditCard(
  //     dataSet.creditCard,
  //     dataSet.cardholderName,
  //     dataSet.cardNo,
  //     dataSet.expMonth,
  //     dataSet.expYear,
  //     dataSet.cardCode
  //   );
  await payment.PurchaseOrder(dataSet.PONumber);

  // Confirm Order
  await continueButton.confirmBtn();

  //wait 
  // await page.waitForLoadState("load");
  await page.waitForURL("**/checkout/completed/");

  //Verify order success
  const text = await page.locator(".title").innerText();
  console.log(text);
  await expect(page.locator(".title")).toHaveText(
    "Your order has been successfully processed!"
  );

  await page.screenshot({ path: "screenshot/order.png" });
});
