import { BasePage } from "../BasePage.js"

export class CheckoutCompletePage extends BasePage
{
    constructor(page)
    {
        super(page)

        this.confirmationMessage  = ".complete-header"

    }


    async verifyOrderConfirmation(expectedText)
    {
        await this.verifyText(this.confirmationMessage, expectedText)
    }




}