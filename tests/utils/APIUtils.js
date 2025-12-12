class APIUtils {
  constructor(apiContext) {
    this.apiContext = apiContext;
  }

  async loginAPI(email,password) {
    const loginPage = await this.apiContext.get("https://demowebshop.tricentis.com/login");
    const html = await loginPage.text();

    const token = html.match(
      /__RequestVerificationToken" type="hidden" value="([^"]+)"/
    );

    await this.apiContext.post("https://demowebshop.tricentis.com/login", {
      form: {
        __RequestVerificationToken: token,
        Email: email,
        Password: password,
        RememberMe: "false",
      },
    });
  }

  async addToCart() {
    const addToCart = await this.apiContext.post(
      "https://demowebshop.tricentis.com/addproducttocart/details/13/1"
    );
    console.log(addToCart.status());
    return addToCart;
  }

  async getStorageState(){ 
    return await this.apiContext.storageState()
  }
}

export default APIUtils;
