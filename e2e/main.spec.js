const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });

test.describe("snapshot test", () => {
    test.beforeEach(async ({ page, browser, context }) => {
        await page.goto('/src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Test.html');
        // https://github.com/microsoft/playwright/issues/4302
        await page.waitForTimeout(5000)
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        // await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(5000)
        await page.screenshot({ path: `./e2e/toolbox.png`, fullPage: true });


    })
   
    //test.use({ viewport: { width: 600, height: 900 } });
    // test.beforeEach(async ({ page, browser, context }) => {
    //     await page.goto('/src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Test.html');
    //     //await page.waitForTimeout(5000)
    //     await page.evaluate(() => window.scrollTo(0, Number.MAX_SAFE_INTEGER));
    //     //await page.waitForTimeout(5000)
    //     await page.screenshot({ path: './e2e/toolbox.png', fullPage: true, animations: 'disabled' });
    // });

    // test('take snapshot', async ({ page }) => {
    //     expect(await page.screenshot({ fullPage: true, animations: 'disabled' }))
    // });

    // text
    test('take snapshot', async ({ page }) => {
        // await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        // await page.waitForTimeout(5000) 
        // await page.evaluate(() => window.scrollTo(0, 0));
        // await page.waitForTimeout(5000) 
        // await page.screenshot({ path: './e2e/toolbox.png', fullPage: true});
        await page.waitForTimeout(5000)
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();

        // const handle = await page.evaluateHandle(() => ({ window, document }));
        // const properties = await handle.getProperties();
        // const windowHandle = properties.get('window');
        // const documentHandle = properties.get('document');
        // console.log(documentHandle.asElement());


        // page.once('load', () => console.log('Page loaded!'));
        // await page.waitForSelector('body')
        // const domBody = await page.$("body")
        // //await page.evaluate(() => await domBody.getAttribute('wc-config-load'));

        // if (await domBody.getAttribute('wc-config-load')) {
        //     const handle = await page.evaluateHandle(() => ({window, document}));
        //     const properties = await handle.getProperties();
        //     const windowHandle = properties.get('window');
        //     const documentHandle = properties.get('document');
        //     console.log(documentHandle.asElement());

        //     // await page.evaluate(() => window.scrollTo(0, Number.MAX_SAFE_INTEGER));
        //     // await page.screenshot({ path: './e2e/toolbox.png', fullPage: true, animations: 'disabled' });
        // }
        //expect(await page.screenshot({ fullPage: true, animations: 'disabled' })).toMatchSnapshot("toolbox.png");
        // for await (const bo of domBody){
        //     console.log("x0x",await bo.getAttribute('wc-config-load'));
        //     const loaded = await bo.getAttribute('wc-config-load')
        //     expect(loaded).toBeTruthy()
        //     await page.evaluate(() => window.scrollTo(0, Number.MAX_SAFE_INTEGER));
        //     await page.screenshot({ path: './e2e/toolbox.png', fullPage: true, animations: 'disabled' });   
        //     expect(await page.screenshot({ fullPage: true, animations: 'disabled' })).toMatchSnapshot("toolbox.png");
        //     // if(loaded){
        //     //     console.log("!!!!!!!!");
        //     //     await page.evaluate(() => window.scrollTo(0, Number.MAX_SAFE_INTEGER));
        //     //     console.log("end")
        //     //     await page.screenshot({ path: './e2e/toolbox.png', fullPage: true, animations: 'disabled' });   
        //     // }
        // }
        //domNode.evaluate(node => console.log(await(node.getAttribute('wc-config-load'))))
        //await page.goto('/src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Test.html');
        //await page.screenshot({path: 'xxx.png'});
        //console.log(await page.locator('body').getAttribute())
        // const watchDog = page.waitForFunction(() => window.addEventListener('wc-config-load'), page.document);
        // console.log(await watchDog)
        // await page.waitForTimeout(5000)
        // const thebody = page.$$('body')
        // debugger
        // console.log("thebody", thebody.map(e => console.log("....xxx", e.innerHTML())))

        // const jsHandle = await page.evaluateHandle('body');
        // console.log("jjjj", await jsHandle.getProperties());
        // const elementbody = await page.waitForSelector('html > document > body')
        // console.log("xxx", await elementbody.getAttribute('wc-config-load'));
        // const wcConfigLoad = await page.getAttribute('wc-config-load');
        // expect(wcConfigLoad).toBeTruthy()

        //         page.on('wc-config-load', request => console.log(`Request sent: ${request}`));
        //         const listener = request => console.log(`Request finished: ${request}`);
        // console.log("list",  listener());
        //         await page.goto('/src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Test.html');
        //expect(await page.screenshot()).toMatchSnapshot("x-toolbox.png");
    });


    // test('take snapshot', async ({ page }) => {
    //     await page.goto('/src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Test.html');
    //     await page.waitForTimeout(5000)
    //     await page.evaluate(() => window.scrollTo(0, Number.MAX_SAFE_INTEGER));
    //     await page.waitForTimeout(5000)
    //     await page.screenshot({ path: './e2e/toolbox.png', fullPage: true, animations: 'disabled' });
    //     expect(await page.screenshot({ fullPage: true, animations: 'disabled' })).toMatchSnapshot("toolbox.png");
    // });

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
