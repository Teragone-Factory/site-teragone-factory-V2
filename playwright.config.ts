import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:3000/site-teragone-factory-V2',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npx serve out -l 3000',
    url: 'http://localhost:3000/site-teragone-factory-V2/',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
