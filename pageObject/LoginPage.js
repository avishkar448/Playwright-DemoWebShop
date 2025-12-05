class LoginPage {
  constructor(page) {
    this.page = page;
    this.navLogin = page.locator("a[href='/login']");
    this.email = page.locator("#Email");
    this.password = page.locator("#Password");
    this.loginBtn = page.getByRole("button", { name: "Log in" });
  }

  async goto() {
    await this.page.goto("https://demowebshop.tricentis.com/");
  }

  async gotoLoginPage() {
    await this.navLogin.click();
  }

  async loginDetails(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}

export default LoginPage;
