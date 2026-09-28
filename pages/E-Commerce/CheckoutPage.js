import { BasePage } from "../BasePage.js"

export class CheckoutPage extends BasePage
{

    constructor(page)
    {
        super(page)

        this.firstNameInput      =   "#first-name"
        this.lastNameInput       =   "#last-name"
        this.postalCodeInput     =   "#postal-code"

        this.continueButton      =   "#continue"
    }

    async enterCustomerInformation(firstName, lastName, postalCode)
    {
        await this.fill(this.firstNameInput, firstName)
        await this.fill(this.lastNameInput, lastName)
        await this.fill(this.postalCodeInput, postalCode)

    }

    async clickContinue()
    {
        await this.click(this.continueButton)
    }
}