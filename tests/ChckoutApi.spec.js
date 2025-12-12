import { expect, test, request } from "@playwright/test";
import APIUtils from "./utils/APIUtils.js";
import Main from "../pageObject/Main.js";
const dataSet = JSON.parse(JSON.stringify(require("./utils/userInfo.json")));

let Context;

test.beforeAll(async ({ browser }) => {
  const api = await request.newContext();
  const apiUtils = new APIUtils(api);
  await apiUtils.loginAPI(dataSet.email, dataSet.password);
  await apiUtils.addToCart();
  const storage = await apiUtils.getStorageState();
  Context = await browser.newContext({ storageState: storage });
});

test("@API Checkout", async () => {
  const page = await Context.newPage();
  const main = new Main(page);
  const login = main.getLoginPage();
  const continueButton = main.clickContinueBtn();
  const addToCart = main.getAddToCartPage();
  const navCheckout = main.navigateToCheckout();
  const billingAdd = main.checkoutBillingAddress();
  const shippingMeth = main.checkoutShippingMethod();
  const payment = main.checkoutPayment();

  await login.goto();

  //wait
  await page.waitForLoadState("networkidle");

  //navigate to checkout
  await navCheckout.NavtoCheckout();

  //Checkout--Start

  //Billing Address
  const addressDropdown = page.locator("#billing-address-select");
  // await page.waitForTimeout(1000);
  await page.waitForLoadState("load");
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
  await page.waitForURL("**/checkout/completed/");

  //Verify order success
  const text = await page.locator(".title").innerText();
  console.log(text);
  await expect(page.locator(".title")).toHaveText(
    "Your order has been successfully processed!"
  );
});
