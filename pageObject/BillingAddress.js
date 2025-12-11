class BillingAddress {
  constructor(page) {
    this.page = page;
    this.company = page.getByRole("textbox", { name: "Company:" });
    this.country = page.getByLabel("Country:");
    this.city = page.getByRole("textbox", { name: "City:" });
    this.address = page.getByRole("textbox", { name: "Address 1:" });
    this.zipCode = page.getByRole("textbox", {
      name: "Zip / postal code:",
    });
    this.phoneNo = page.getByRole("textbox", { name: "Phone number:" });

    this.continueBtnLocator = page.getByRole("button", { name: "Continue" });
    this.addressSelect = page.locator(".address-select");
  }
  //   async continueBtn() {
  //     await this.continueBtnLocator.click();
  //   }

  async setBillingAddress(company, city, address, zipCode, phoneNo) {
    if (await this.company.isVisible()) {
      await this.company.fill(company);
      await this.country.selectOption("India");
      await this.city.fill(city);
      await this.address.fill(address);
      await this.zipCode.fill(zipCode);
      await this.phoneNo.fill(phoneNo);
    }
  }
}

export default BillingAddress;
