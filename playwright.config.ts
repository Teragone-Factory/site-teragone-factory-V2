import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  timeout: 30000,
  use: {
    baseURL: 'http://127.0.0.1:3000/site-teragone-factory-V2',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npx http-server out -p 3000 -a 127.0.0.1',
    url: 'http://127.0.0.1:3000/site-teragone-factory-V2/',
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
