import { test, expect } from '@playwright/test'

test('homepage loads in english by default', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('AI-ready & agent-ready engineering.')).toBeVisible()
  await expect(page.getByText('Discuss your project')).toBeVisible()
})

test('language switcher enables french version', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'FR' }).click()

  await expect(page.getByText('Discutons de votre projet')).toBeVisible()
})
