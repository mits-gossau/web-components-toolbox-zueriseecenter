const { test, expect } = require('@playwright/test');

test.describe("snapshot test", () => {
    //test.use({ viewport: { width: 600, height: 900 } });
    // test.beforeEach(async ({ page, browser, context }) => {
    //     await page.goto('/src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Test.html');
    //     //await page.waitForTimeout(5000)
    //     await page.evaluate(() => window.scrollTo(0, Number.MAX_SAFE_INTEGER));
    //     //await page.waitForTimeout(5000)
    //     await page.screenshot({ path: './e2e/toolbox.png', fullPage: true, animations: 'disabled' });
    // });

    // test('take snapshot', async ({ page }) => {
    //     expect(await page.screenshot({ fullPage: true, animations: 'disabled' })).toMatchSnapshot("toolbox.png");
    // });


    test('take snapshot', async ({ page }) => {
        await page.goto('/src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Test.html');
        await page.waitForTimeout(5000)
        await page.evaluate(() => window.scrollTo(0, Number.MAX_SAFE_INTEGER));
        await page.waitForTimeout(5000)
        await page.screenshot({ path: './e2e/toolbox.png', fullPage: true, animations: 'disabled' });
        expect(await page.screenshot({ fullPage: true, animations: 'disabled' })).toMatchSnapshot("toolbox.png");
    });

    // test('should work', async ({ page}) => {
    //     //await page.setViewportSize({ width: 500, height: 500 });
    //     //await page.evaluate(() => window.scrollBy(50, 100));
    //     //const elementHandle = await page.$('p-general');
    //     const elementHandle = page.locator('p-general')
    //     await elementHandle.waitFor();
    //     const screenshot = await elementHandle.screenshot({path: './e2e/footer.png'});
    //     expect(screenshot).toMatchSnapshot('./e2e/footer.png');
    // });
})
