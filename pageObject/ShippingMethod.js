class ShippingMethod {
  constructor(page) {
    this.page = page;
    this.ground = page.getByRole('radio', { name: 'Ground (0.00)' });
    this.nextDayAir = page.getByRole('radio', { name: 'Next Day Air (0.00)' });
    this.secondDayAir = page.getByRole('radio', { name: '2nd Day Air (0.00)' });
  }

  async setGround() {
    await this.ground.click();
  }
  async setNextDayAir() {
    await this.nextDayAir.click();
  }
  async setSecondDayAir() {
    await this.secondDayAir.click();
  }
}

export default ShippingMethod;
