import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://en.wikipedia.org/wiki/Main_Page');

  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Enter your username').click();
  await page.getByPlaceholder('Enter your username').fill('testuser');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('testpassword');
  await page.getByRole('button', { name: 'Log in' }).click();
});
