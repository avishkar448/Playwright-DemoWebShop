import { test, expect, request } from "@playwright/test";
import Main from "../pageObject/Main.js";
import APIUtils from "./utils/APIUtils.js";
const dataSet = JSON.parse(JSON.stringify(require("./utils/userInfo.json")));

let Context;

test.beforeAll(async ({ browser }) => {
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext);
  await apiUtils.loginAPI(dataSet.email, dataSet.password);
  const storage = await apiUtils.getStorageState();
  Context = await browser.newContext({ storageState: storage });
});

test("@API Add to cart", async () => {
  const page = await Context.newPage();
  const main = new Main(page);

  const login = main.getLoginPage();
  const addToCart = main.getAddToCartPage();

  //Login 
  await login.goto();

  //shopping cart count
  const count = await page.locator("#topcartlink .cart-qty").innerText();
  let number = Number(count.replace(/[()]/g, ""));
  console.log(number);

  //Add the book to cart
  await addToCart.AddTheProductToCart();

  //Verify the cart count updated or not
  await expect(page.locator("#topcartlink .cart-qty")).toHaveText(
    `(${number + 1})`
  );
});
