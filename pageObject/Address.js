class Address {
  constructor(page) {
    this.page = page;

    this.user = page.locator(".account");
    this.selectAddressOption = page.getByRole("link", { name: "Addresses" });
    this.addAddress = page.getByRole("button", { name: "Add new" });

    //Address
    // this.fname = page.locator("#Address_FirstName");
    // this.lname = page.locator("#Address_LastName");
    // this.email = page.locator("#Address_Email");
    // this.company = page.locator("#Address_Company");
    // this.country = page.locator("#Address_CountryId");
    // this.state = page.locator("#Address_StateProvinceId");
    // this.city = page.locator("#Address_City");
    // this.address = page.locator("#Address_Address1");
    // this.zip = page.locator("#Address_ZipPostalCode");
    // this.phone = page.locator("#Address_PhoneNumber");
    // this.submit - page.locator(".buttons .save-address-button");

    this.fname = page.getByRole("textbox", { name: "First name:" });
    this.lname = page.getByRole("textbox", { name: "Last name:" });
    this.email = page.getByRole("textbox", { name: "Email:" });
    this.company = page.getByRole("textbox", { name: "Company:" });
    this.city = page.getByRole("textbox", { name: "City:" });
    this.address = page.getByRole("textbox", { name: "Address 1:" });
    this.zip = page.getByRole("textbox", { name: "Zip / postal code:" });
    this.phone = page.getByRole("textbox", { name: "Phone number:" });
    this.fax = page.getByRole("textbox", { name: "Fax number:" });

    this.country = page.getByRole("combobox", { name: "Country:" });
    this.state = page.getByRole("combobox", { name: "State / province:" });

    this.submit = page.getByRole("button", { name: "Save" });
  }

  async NavigateToAddress() {
    await this.user.click();
    await this.selectAddressOption.nth(2).click();
    await this.addAddress.click();
  }

  async FillTheAddress(
    fname,
    lname,
    email,
    company,
    country,
    state,
    city,
    address,
    zip,
    phone
  ) {
    await this.fname.fill(fname);
    await this.lname.fill(lname);
    await this.email.fill(email);
    await this.company.fill(company);
    await this.country.fill(country);
    await this.state.fill(state);
    await this.city.fill(city);
    await this.address.fill(address);
    await this.zip.fill(zip);
    await this.phone.fill(phone);

    await this.submit.click();
  }
}

export default Address;
