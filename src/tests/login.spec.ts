import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData} from '../fixtures/test-data';

test ('should display products page after successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(loginData.user.validUser, loginData.pasword.validPassword);
    await expect (page.getByTestId('title')).toBeVisible();
});

test ('should not display products page after unsuccessful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(loginData.user.validUser, loginData.pasword.wrongPassword);
    await expect(page.getByTestId('error')).toBeVisible();
});

test ('should not allow the acces for a locked user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(loginData.user.lockedUser, loginData.pasword.validPassword  );
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});