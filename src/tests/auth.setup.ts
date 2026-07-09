// auth.setup.ts

import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { loginData } from '../fixtures/test-data.js';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(loginData.user.validUser,loginData.password.validPassword,);
    await expect(page.getByTestId('title')).toHaveText('Products');
    await page.context().storageState({path: authFile,});
});