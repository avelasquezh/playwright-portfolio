import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByTestId('username');
        this.passwordInput = page.getByTestId('password');
        this.loginButton   = page.getByTestId('login-button');
    }
    async navigate(): Promise<void> {
        await this.page.goto(process.env.BASE_URL!);
    }   
    async login(usuario: string, contraseña: string): Promise<void> {
        await this.usernameInput.fill(usuario);
        await this.passwordInput.fill(contraseña);
        await this.loginButton.click();
    }
}