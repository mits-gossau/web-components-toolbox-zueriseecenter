const { test, expect } = require('@playwright/test');

test('demo page screenshot test', async ({ page, browserName }) => {
    await page.goto('src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Home.html');
    const demoPage = await page.waitForSelector('body')
    const wcLoaded = await demoPage.getAttribute('wc-config-load')
    if (wcLoaded) {
        await page.evaluate(() => window.scrollTo(0, 999999999));
        await page.waitForTimeout(5000);
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.screenshot({ path: `./e2e/master_${browserName}.png`, fullPage: true });
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(`./e2e/master_${browserName}.png`);
    }
});