class ShippingMethod{ 
    constructor(page){ 
        this.page=page;
        this.ground=page.locator("#shippingoption_0");
        this.nextDayAir=page.locator("#shippingoption_1")
        this.secondDayAir=page.locator("#shippingoption_2")
    }

    async setGround(){ 
        await this.ground.click();
    }
    async setNextDayAir(){
        await this.nextDayAir.click();
    }
    async setSecondDayAir(){
        await this.secondDayAir.click()
    }
}

export default ShippingMethod;