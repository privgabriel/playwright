import { test, expect } from '@playwright/test'

test('Simple basic test', async ({ page }) => {
  await page.goto('https://www.example.com')
  // const pageTitle = await page.locator('text=Example Domain')
   // const pageTitle = page.getByText('Example Domain')
  await expect(page.getByText('Example Domain')).toContainText('Example Domain')
  expect(await page.screenshot()).toMatchSnapshot('homePage.png');
})