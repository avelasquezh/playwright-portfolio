import { type Page, type Locator } from '@playwright/test';

export class Inventory{
    readonly page: Page;
    readonly title: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.title = page.getByTestId('title');
    }

    async addToCart(product: string) {//cada ves que se llame a una función asincrona se requiere usar await
        const productLocator = this.page.getByTestId(product)
        await productLocator.click();//cada ves que se llame a una función asincrona se requiere usar await
    }
    async getCartCount(): Promise<number> {
        const badge = (await this.page.getByTestId('shopping-cart-badge')?.textContent())?.trim();
        if (!badge) {
            return 0;
        }
        console.log(badge);
        return Number(badge);
    }
}