import { test, expect } from 'allure-playwright'; 
import { NavbarPage } from '../pages/components/NavbarPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { loginData} from '../fixtures/test-data.js';
import { label, epic, feature, story, severity, description, Severity} from 'allure-js-commons';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(loginData.user.validUser, loginData.password.validPassword);
    await expect (page.getByTestId('title')).toBeVisible();
});


test ('should finish sesion after successful logout', async ({ page }) => {
    await label('priority', 'high');
    await epic('Saucedemo');
    await feature('Authentication');
    await story('Logout');
    await severity(Severity.CRITICAL);
    await description('Checks the successful logout for a loged user.');
    const navbarPage = new NavbarPage(page);
    await navbarPage.logout();
    await expect (page.getByTestId('login-container')).toBeVisible();
});

test ('should not allow navigate to inventory page after successful logout', async ({ page }) => {
    await label('priority', 'high');
    await epic('Saucedemo');
    await feature('Authentication');
    await story('Logout');
    await severity(Severity.CRITICAL);
    await description('Checks the restriction to navigate to inventory page for a unloged user.');
    const navbarPage = new NavbarPage(page);
    await navbarPage.logout();
    await page.goto(process.env.BASE_URL!+'/inventory.html');
    await expect(page.getByText("Epic sadface: You can only access '/inventory.html' when you are logged in.")).toBeVisible();
});