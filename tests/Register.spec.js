import { test } from "@playwright/test";

test("Register the user", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  
  await page.getByRole('link', { name: 'Register' }).click();

  const title = await page.title();
  console.log(title);

  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'First name:' }).fill("Avishkar");
  await page.getByRole('textbox', { name: 'Last name:' }).fill("Roy");
  await page.getByRole('textbox', { name: 'Email:' }).fill("Roy12@gmail.com");
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill("9730328530");
  await page.getByRole('textbox', { name: 'Confirm password:' }).fill("9730328530");
  await page.getByRole('button', { name: 'Register' }).click();
});
