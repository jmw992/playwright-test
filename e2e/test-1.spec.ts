import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'About Page → Playwright will test if this link is working.' }).click();
  await page.getByRole('link', { name: '← Go Back' }).click();
  await page.getByRole('link', { name: 'Documentation → Find in-depth information about Next.js features and API.' }).click();
});