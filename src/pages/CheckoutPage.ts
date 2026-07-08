import { type Page, type Locator } from '@playwright/test';

export class CheckoutPage{
    readonly page: Page;
    readonly title: Locator;
    readonly nameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('[data-test="title"]');
        this.nameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
    }
    
    async sendCheckout(nombre: string, apellido: string, codigoPostal: string): Promise<void> {
        await this.nameInput.fill(nombre);
        await this.lastNameInput.fill(apellido);
        await this.postalCodeInput.fill(codigoPostal);
        await this.continueButton.click();
    }
}