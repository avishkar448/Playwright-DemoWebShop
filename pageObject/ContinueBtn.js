class ContinueBtn {
  constructor(page) {
    this.page = page;

    this.confirmBtnLocator = page.getByRole("button", { name: "Confirm" });
    // this.continueBtnLocator = page.getByRole('button', { name: 'Continue' });
     this.continueBtnLocator = page.locator("input.button-1[value='Continue']");
  }

  continueBtn() {
    return this.continueBtnLocator;
  }

  async confirmBtn() {
    await this.confirmBtnLocator.click();
  }
}

export default ContinueBtn;
