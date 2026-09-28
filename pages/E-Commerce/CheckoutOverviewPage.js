import {BasePage} from "../BasePage.js"

export class CheckoutOverviewPage extends BasePage
{
    constructor(page)
    {
        super(page)

        this.title                     =  ".title"
        this.cartItem                  =  ".cart_item"
        this.finishButton              =  "#finish"  

    }

    async verifyTitle(text)
    {
        await this.verifyText(this.title, text)
    }

    async verifyProduct(productName)
    {
        await this.verifyText(this.cartItem, productName)
    }

    async clickFinish()
    {
        await this.click(this.finishButton)
    }
}