import {BasePage} from "../BasePage.js"

export class CartPage extends BasePage
{
    constructor(page)
    {
        super(page)

        this.cartItems         = ".cart_item"
        this.checkoutButton    = "#checkout" 
    
    }


    async verifyCartItem(productName)
    {

        await this.verifyText(this.cartItems, productName)

    }

    async clickCheckout()
    {
        await this.click(this.checkoutButton)
    }
}