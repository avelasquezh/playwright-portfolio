
import { type Page, type Locator } from '@playwright/test';

export class CheckoutOverviewPage{
    readonly page: Page;
    readonly title: Locator;
    readonly continueButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.title = page.getByTestId('title');
        this.continueButton = page.getByTestId('finish');
    }

    async finishCheckout(){
        await this.continueButton.click();
    }
}