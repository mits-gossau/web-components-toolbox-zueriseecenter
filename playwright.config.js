// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    //forbidOnly: !!process.env.CI,
    //retries: process.env.CI ? 2 : 0,
    timeout: 30000,
    use: {
        baseURL: 'http://localhost:4200',
        trace: 'on-first-retry',
        headless: true
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
};

module.exports = config;