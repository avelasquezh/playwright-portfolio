import { type Page, type Locator } from '@playwright/test';

export class NavbarPage {
    readonly page: Page;
    readonly navbarButton: Locator;
    readonly logoutButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.navbarButton = page.getByRole('button', { name: 'Open Menu' })
        this.logoutButton = page.getByTestId('logout-sidebar-link');
    }
    async logout(): Promise<void> {
        await this.navbarButton.click();
        await this.logoutButton.click();
    }   
}   