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
        this.title = page.getByTestId('title');
        this.nameInput = page.getByTestId('firstName');
        this.lastNameInput = page.getByTestId('lastName');
        this.postalCodeInput = page.getByTestId('postalCode');
        this.continueButton = page.getByTestId('continue');
    }
    
    async sendCheckout(nombre: string, apellido: string, codigoPostal: string): Promise<void> {
        await this.nameInput.fill(nombre);
        await this.lastNameInput.fill(apellido);
        await this.postalCodeInput.fill(codigoPostal);
        await this.continueButton.click();
    }
}