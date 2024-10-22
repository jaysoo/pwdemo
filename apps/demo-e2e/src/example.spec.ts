import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  if (process.env.CUSTOM_MODE === 'private') {
    expect(await page.locator('h1').innerText()).toContain('Hello Private');
  } else {
    expect(await page.locator('h1').innerText()).toContain('Hello Default');
  }
  await page.screenshot({ path: '../../tmp/screenshot.png', fullPage: true })
});
