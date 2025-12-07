import { test, expect } from '@playwright/test';

test('home shows supplement items', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toHaveText('SupplementApp');
  // We expect the backend to be running locally; at least the app should load
  await expect(page.locator('ul')).toBeVisible();
});
