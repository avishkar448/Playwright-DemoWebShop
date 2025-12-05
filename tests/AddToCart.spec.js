import { test, expect } from "@playwright/test";
import Main from "../pageObject/Main.js";

test("Add to cart", async ({ page }) => {
  const main = new Main(page);

  const login = main.getLoginPage();
  const addToCart = main.getAddToCartPage();

  //Login Details
  const email = "avishkar123@gmail.com";
  const password = "123456789";

  await login.goto();
  await login.gotoLoginPage();
  await login.loginDetails(email, password);

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
