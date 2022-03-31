const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Home.html');
    await page.waitForTimeout(5000)
    await page.waitForSelector('body')
    const domBody = await page.$("body")
    if (await domBody.getAttribute('wc-config-load')) {
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.screenshot({ path: `./e2e/master.png`, fullPage: true });
    }
})

test('test desktop version', async ({ page }) => {
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('./e2e/master.png');
});