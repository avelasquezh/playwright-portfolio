import { type Page, type Locator } from '@playwright/test';

export class CartPage{
    readonly page: Page;
    readonly title: Locator;
    readonly checkoutBtn: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.title = page.getByTestId('title');
        this.checkoutBtn = page.getByTestId('checkout');
    }
    
    async navigateToCheckout(){
        await this.checkoutBtn.click();
    }

}