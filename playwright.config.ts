import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  timeout: 45000,
  expect: {
    timeout: 10000,
  },
  use: {
    baseURL: 'http://127.0.0.1:3000/site-teragone-factory-V2',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run build && npx serve@14.2.4 out -l tcp://127.0.0.1:3000',
    url: 'http://127.0.0.1:3000/site-teragone-factory-V2/',
    reuseExistingServer: !process.env.CI,
    timeout: 180000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
