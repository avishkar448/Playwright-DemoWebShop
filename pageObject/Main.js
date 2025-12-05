import LoginPage from "./LoginPage.js";
import AddToCart from "./AddToCart.js";
import Address from "./Address.js";
import BillingAddress from "./BillingAddress.js";
import NavToCheckout from "./NavToCheckout.js";
import ContinueBtn from "./ContinueBtn.js";
import ShippingMethod from "./ShippingMethod.js";
import PaymentInfo from "./PaymentInfo.js";
import PaymentMethod from "./PaymentMethod.js";
import Payment from "./Payment.js";

class Main{ 
    constructor(page){ 
        this.page=page;
        this.loginPage= new LoginPage(this.page);
        this.addToCart= new AddToCart(this.page);
        this.address= new Address(this.page);
        this.billingAddress= new BillingAddress(this.page)
        this.navToCheckout= new NavToCheckout(this.page)
        this.continueBtn = new ContinueBtn(this.page)
        this.shippingMethod= new ShippingMethod(this.page)
        this.paymentInfo= new PaymentInfo(this.page)
        this.paymentMethod= new PaymentMethod(this.page)
        this.payment=new Payment(this.page)
    }

    getLoginPage(){ 
        return this.loginPage;
    }

    getAddToCartPage(){ 
        return this.addToCart;
    }

    getAddressPage(){ 
        return this.address;
    }

    navigateToCheckout(){ 
        return this.navToCheckout;
    }

    checkoutBillingAddress(){ 
        return this.billingAddress;
    }

    checkoutShippingMethod(){ 
        return this.shippingMethod;
    }

    checkoutPaymentMethod(){ 
        return this.paymentMethod;
    }

    checkoutPaymentInfo(){ 
        return this.paymentInfo;
    }

    checkoutPayment(){ 
        return this.payment;
    }

    clickContinueBtn(){ 
        return this.continueBtn;
    }


}

export default Main;