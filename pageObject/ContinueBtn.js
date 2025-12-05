class ContinueBtn {
  constructor(page) {
    this.page = page;

    // this.continueBtnLocator = page.getByRole("button", { name: "Continue" })
    this.continueBtnLocator = page.locator("input.button-1[value='Continue']");
  }

  continueBtn() {
    return this.continueBtnLocator;
  }
}

export default ContinueBtn;
