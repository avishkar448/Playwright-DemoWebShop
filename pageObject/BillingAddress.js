class BillingAddress {
  constructor(page) {
    this.page = page;
    this.company = page.locator("#BillingNewAddress_Company");
    this.country = page.locator("#BillingNewAddress_CountryId");
    this.city = page.locator("#BillingNewAddress_City");
    this.address = page.locator("#BillingNewAddress_Address1");
    this.zipCode = page.locator("#BillingNewAddress_ZipPostalCode");
    this.phoneNo = page.locator("#BillingNewAddress_PhoneNumber");

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
