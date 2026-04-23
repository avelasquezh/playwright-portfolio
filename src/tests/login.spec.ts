import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test ('should display products page after successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect (page.getByTestId('title')).toBeVisible();
}
);
test ('should not display products page after unsuccessful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce_wrong');
    await expect(page.getByTestId('error')).toBeVisible();
}
);

test ('should not allow the acces for a locked user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
}
);

