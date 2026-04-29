import { test, expect } from 'allure-playwright'; 
import { LoginPage } from '../pages/LoginPage.js';
import { loginData} from '../fixtures/test-data.js';
import { label, epic, feature, story, severity, description, Severity} from 'allure-js-commons';


test ('should display products page after successful login', async ({ page }) => {
    await label('priority', 'high');
    await epic('Saucedemo');
    await feature('Authentication');
    await story('Login');
    await severity(Severity.CRITICAL);
    await description('Checks the succesfull login for a valid user.');

    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(loginData.user.validUser, loginData.password.validPassword);
    await expect (page.getByTestId('title')).toBeVisible();
});

test ('should not display products page after unsuccessful login', async ({ page }) => {
    await label('priority', 'high');
    await epic('Saucedemo');
    await feature('Authentication');
    await story('Login');
    await severity(Severity.NORMAL);
    await description('Checks the unsuccesfull login for a invalid user.');

    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(loginData.user.validUser, loginData.password.wrongPassword);
    await expect(page.getByTestId('error')).toBeVisible();
});

test ('should not allow the acces for a locked user', async ({ page }) => {
    await label('priority', 'high');
    await epic('Saucedemo');
    await feature('Authentication');
    await story('Login');
    await severity(Severity.NORMAL);
    await description('Checks the unsuccesfull login for a locked user.');

    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(loginData.user.lockedUser, loginData.password.validPassword);
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});