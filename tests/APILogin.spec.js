import { test, request } from "@playwright/test";

let loggedInContext;

test.beforeAll(async ({ browser }) => {
  const api = await request.newContext();

  
  const loginPage = await api.get("https://demowebshop.tricentis.com/login");
  const html = await loginPage.text();

  const token = html.match(/__RequestVerificationToken" type="hidden" value="([^"]+)"/);

  
  await api.post("https://demowebshop.tricentis.com/login", {
    form: {
      __RequestVerificationToken: token,
      Email: "avishkar123@gmail.com",
      Password: "123456789",
      RememberMe: "false",
    },
  });

  
  const storage = await api.storageState();
  loggedInContext = await browser.newContext({ storageState: storage });

  await api.dispose();
});

test("@API Login", async () => {
  const page = await loggedInContext.newPage();
  await page.goto("https://demowebshop.tricentis.com/");
  await page.pause(); // You will be logged in
});



// test.beforeAll(async () => {
//   const api = await request.newContext();

//   const loginPage = await api.get("https://demowebshop.tricentis.com/login");
//   const html = await loginPage.text();

//   const token = html.match(/__RequestVerificationToken" type="hidden" value="([^"]+)"/);

//   await api.post("https://demowebshop.tricentis.com/login", {
//     form: {
//       __RequestVerificationToken: token,
//       Email: dataSet.email,
//       Password: dataSet.password,
//       RememberMe: "false",
//     },
//   });

//   const addToCart= await api.post("https://demowebshop.tricentis.com/addproducttocart/details/13/1")
//   console.log(addToCart.status());
//   const storage = await api.storageState();
//   loggedInContext = await browser.newContext({ storageState: storage });

// });