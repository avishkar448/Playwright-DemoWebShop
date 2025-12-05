import { expect, test } from "@playwright/test";
import Main from "../pageObject/Main.js";
const dataSet = JSON.parse(JSON.stringify(require("./utils/userInfo.json")));

test("Login Page", async ({ page }) => {
  const main = new Main(page);
  const login = main.getLoginPage();
  const address = main.getAddressPage();

  //Login Details
  // const email="avishkar123@gmail.com";
  // const password="123456789";

  await login.goto();
  await login.gotoLoginPage();
  await login.loginDetails(dataSet.email, dataSet.password);

  //Screeshot
  await page.screenshot({ path: "screenshot/Login.png" });

  //verify
  console.log(await page.locator(".account").first().innerText());
  await expect(page.locator(".account").first()).toHaveText(dataSet.email);

  // Add address

  // await address.NavigateToAddress();
  // await address.FillTheAddress();
});
