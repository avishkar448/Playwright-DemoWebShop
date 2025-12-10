import PaymentMethod from "./PaymentMethod.js";
import ContinueBtn from "./ContinueBtn.js";
import PaymentInfo from "./PaymentInfo.js";

class Payment{ 
    constructor(page){ 
        this.page=page;
        this.paymentMeth=new PaymentMethod(this.page);
        this.paymentInfo=new PaymentInfo(this.page);
        this.ContinueBtn=new ContinueBtn(this.page);

        this.creaditCardType=page.locator("#CreditCardType");
        this.cardHolderName=page.getByRole('textbox', { name: 'Cardholder name' });
        this.cardNumber=page.getByRole('textbox', { name: 'Card number' });
        this.expMonth=page.locator("#ExpireMonth")
        this.expYear=page.locator("#ExpireYear")
        this.cardCode=page.getByRole('textbox', { name: 'Card code' });
        this.poNumber= page.getByRole('textbox', { name: 'PO Number' });
    }
    

    async CashOnDelivery(){ 
        await this.paymentMeth.setCashOnDelivery();
        await this.ContinueBtn.continueBtn().nth(3).click();
        await this.ContinueBtn.continueBtn().nth(4).click();
    }

    async MoneyOrder(){ 
        await this.paymentMeth.setMoneyOrder();
        await this.ContinueBtn.continueBtn().nth(3).click();
        await this.ContinueBtn.continueBtn().nth(4).click();
    }

    async CreaditCard(cardType,cardHolder,cardNo,expM,expY,cardCode){ 
        await this.paymentMeth.setCreditCard();
        await this.ContinueBtn.continueBtn().nth(3).click();

        await this.creaditCardType.selectOption(cardType);
        await this.cardHolderName.fill(cardHolder);
        await this.cardNumber.fill(cardNo);
        await this.expMonth.selectOption(expM);
        await this.expYear.selectOption(expY);
        await this.cardCode.fill(cardCode);

        await this.ContinueBtn.continueBtn().nth(4).click();
        

    }

    async PurchaseOrder(num){ 
         await this.paymentMeth.setPOrder();
         await this.ContinueBtn.continueBtn().nth(3).click();

          this.poNumber.fill(num);
          await this.ContinueBtn.continueBtn().nth(4).click();

    }
}

export default Payment;