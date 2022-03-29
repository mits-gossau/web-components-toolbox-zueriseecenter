const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
    await page.goto('/src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Test.html',{waitUntil: 'domcontentloaded'});
    //await page.waitForEvent('domcontentloaded')
    //console.log(await page.locator('html > body').getAttribute('wc-config-load'));
    //const isok = await page.waitForEvent('wc-config-load')

    // Note that Promise.all prevents a race condition
    // between clicking and waiting for the event.
    const [frame, _] = await Promise.all([
        // It is important to call waitForEvent before click to set up waiting.
        page.waitForEvent('framenavigated'),


    ]);

    //console.log("frame", frame);





    //console.log("out")
    const document = await page.evaluateHandle('document')
    //console.log("doc", document.body)
    const test = await page.evaluate(() => new Promise(resolve => {
        console.log("loadedXXXXX")
        if (document.body.hasAttribute('wc-config-load')) {
            console.log("resove");
            resolve()
        } else {
            console.log("event x1")
            document.body.addEventListener('wc-config-load', event => resolve())
        }
        //console.log(resolve)
    }))

    //console.log("ende test xxx", test)

    // force lazy loading
    await page.evaluate(() => window.scrollTo(0, Number.MAX_SAFE_INTEGER));
    // Here I'd love to use page.waitForNetworkIdle() instead of something similar
    await page.waitForTimeout(2000);

    expect(await page.screenshot({ animations: 'disabled', fullPage: true })).toMatchSnapshot();

})