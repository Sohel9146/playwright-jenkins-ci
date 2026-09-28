import { expect } from '@playwright/test'

export class BasePage 
{

    constructor(page)
    {
        this.page       =   page;
    }

    // Navigate
    async navigate(url)
    {
        await this.page.goto(url, { waitUntil : 'load' } )
    }

    // Click
    async click(locator)
    {
        await this.page.locator(locator).click()
    }

    // Fill
    async fill(locator,text)
    {
        await this.page.locator(locator).fill(text)
    }

    // Get Text
    async getText(locator) 
    {
        return await this.page.locator(locator).textContent();
    }

    // Verify Text
    async verifyText(locator, expectedText) 
    {
        await expect(this.page.locator(locator)).toContainText(expectedText);
    }

    // Verify Visible
    async verifyVisible(locator) 
    {
        await expect(this.page.locator(locator)).toBeVisible();
    }

    // Wait For Element
    async waitForElement(locator) 
    {
        await this.page.locator(locator).waitFor();
    }

    // Scroll to View
    async scrollIntoView(locator) 
    {
        await this.page.locator(locator).scrollIntoViewIfNeeded();
    }


}