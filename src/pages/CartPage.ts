import { type Page, type Locator } from '@playwright/test';

export class CartPage{
    readonly page: Page;
    readonly title: Locator;
    readonly checkoutBtn: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('[data-test="title"]');
        this.checkoutBtn = page.locator('[data-test="checkout"]');
    }
    
    async navigateToCheckout(): Promise<void> {
        await this.checkoutBtn.click();
    }

}