import {test} from '@playwright/test';

test("Register the user", async ({page})=>{ 
    await page.goto("https://demowebshop.tricentis.com/")

    await page.locator("a[href='/register']").click()

    const title = await page.title();
    console.log(title);

    await page.locator("#gender-male").click();
    await page.locator("#FirstName").fill("avi");
    await page.locator("#LastName").fill("gawali");
    await page.locator("#Email").fill("avishkar123@gmail.com");
    await page.locator("#Password").fill("123456789");
    await page.locator("#ConfirmPassword").fill("123456789");

    await page.locator("#register-button").click();

    

})