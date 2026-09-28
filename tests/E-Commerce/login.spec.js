import {test, expect} from "@playwright/test"
import {Login_Page} from "../../pages/E-Commerce/Login_Page"

test.describe("Login Page", () => 
{

    test("Verify SauceDemo login", async ({page}) => 
    {
            const loginpage = new Login_Page(page)

            await page.goto("https://www.saucedemo.com/")

            await loginpage.login("standard_user", "secret_sauce")

            await expect(page).toHaveURL(/inventory/)

    })
})