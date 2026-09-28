import { test, expect } from "@playwright/test";

import "dotenv/config";

import purchasedata from "../../test-data/E-Commerce/purchaseData.json"

import { Login_Page } from "../../pages/E-Commerce/Login_Page.js"

import { InventoryPage } from "../../pages/E-Commerce/InventoryPage.js"

import { CartPage } from "../../pages/E-Commerce/CartPage.js"

import { CheckoutPage } from "../../pages/E-Commerce/CheckoutPage.js"

import { CheckoutOverviewPage } from "../../pages/E-Commerce/CheckoutOverviewPage.js"

import { CheckoutCompletePage  } from "../../pages/E-Commerce/CheckoutCompletePage.js"


test.describe("E-Commerce Purchase Flow", () => 
{

    test("Verify product can be added to cart", async ({page}) => 
    {

        const loginpage = new Login_Page(page)

        const inventorypage = new InventoryPage(page)

        const cartpage = new CartPage(page)

        const checkoutpage = new CheckoutPage(page)

        const checkoutoverviewpage = new CheckoutOverviewPage(page)

        const checkoutcompletepage = new CheckoutCompletePage(page)
 

        //Navigate to the application
        await page.goto("/")

        

        //Login to the application
        await loginpage.login(process.env.SAUCE_USERNAME,process.env.SAUCE_PASSWORD)

        

 
        //Verify Inventory page is displayed
        await inventorypage.verifyInventoryPage()


        //Add product to cart
        await inventorypage.addProduct(purchasedata.productName_1)

      

        //Verify cart count is 1
       const cartCount =  await inventorypage.getCartCount()

       expect(cartCount).toBe("1")

       

       //Open cart 
       await inventorypage.openCart()

     

       //Verify product is added to cart
       await cartpage.verifyCartItem(purchasedata.productName_1)

       

       //Click on checkout button
       await cartpage.clickCheckout()

       

       //Enter customer information
       await checkoutpage.enterCustomerInformation(purchasedata.firstName, purchasedata.lastName, purchasedata.postalCode)

       

       //click on continue button
       await checkoutpage.clickContinue()

    

       //Verify Title is displayed in checkout overview page
       await checkoutoverviewpage.verifyTitle("Checkout: Overview")

      

       //Verify product is displayed in checkout overview page
       await checkoutoverviewpage.verifyProduct(purchasedata.productName_1)

      
       //Click on finish button
       await checkoutoverviewpage.clickFinish()

      

       //Verify order Confirmation Message
       await checkoutcompletepage.verifyOrderConfirmation("Thank you for your order!")







    })

})
