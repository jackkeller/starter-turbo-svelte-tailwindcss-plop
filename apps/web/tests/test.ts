import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(await page.locator('h1')).toHaveText(/Web/);
});
