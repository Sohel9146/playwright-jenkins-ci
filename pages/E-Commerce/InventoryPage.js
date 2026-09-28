import {BasePage} from "../BasePage.js"

export class InventoryPage extends BasePage
{
    
    constructor(page)
    {
        super(page)

        this.inventoryContainer     =   ".inventory_list"
        this.cartLink               =   ".shopping_cart_link"
        this.cartBadge              =   ".shopping_cart_badge"

    }

    async verifyInventoryPage()
    {
        await this.verifyVisible(this.inventoryContainer)
    }

    async addProduct(productName)
    {

        const product = this.page.locator(".inventory_item").filter({ hasText: productName })

        await product.locator("button").click()

    }

    async openCart()
    {
        await this.click(this.cartLink)
    }

    async getCartCount()
    {
         return await this.getText(this.cartBadge)
    }



}