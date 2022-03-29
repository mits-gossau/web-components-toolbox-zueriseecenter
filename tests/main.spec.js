const { test, expect } = require('@playwright/test');

test.describe("snapshot test", () => {

    console.log("describe...")
    //test.use({ viewport: { width: 600, height: 900 } });

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('/src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Test.html');
        await page.waitForTimeout(5000)
        await page.evaluate(() => window.scrollTo(0, Number.MAX_SAFE_INTEGER));
        await page.waitForTimeout(5000)
        await page.screenshot({path: 'toolbox.png', fullPage: true});
      });

    test('take snapshot', async ({ page }) => {
        console.log("test...");
        //await page.goto('/src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Test.html');
        expect(await page.screenshot({ animations: 'disabled', fullPage: true })).toMatchSnapshot("toolbox.png");

    })


})

// test('test', async ({ page }) => {



//     await page.goto('/src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Test.html', { waitUntil: 'domcontentloaded' });
//     //await page.goto('https://www.zueriseecenter.ch')
//     await page.waitForTimeout(5000)

//     await page.waitForSelector("body")
//     const repos = await page.$$("body");
//     // for await (const repo of repos) {
//     //     console.log("11",await repo.getAttribute('wc-config-load'));
//     // }
//     //console.log(pg);
//     // const [allUrls] = await Promise.all(repos.map(async (repo, i) => {
//     //     return await repo.getAttribute('wc-config-load')
//     // }))
//     // console.log(allUrls);

//     const [allUrls] = await Promise.all(repos.map(async (repo, i) => {
//         //console.log(await repo.getProperties());
//         return await repo.getAttribute('wc-config-load')
//     }))
//     console.log(allUrls);

//     if(allUrls){
//         await page.screenshot({ path: "toolbox.png", fullPage: true })
//     }

//     //page.once('load', () => console.log('Page loaded!'));
//     // const attr = await page.getAttribute('wc-config-load').then(e => console.log("bod", e))
//     // console.log(attr);
//     // await page.evaluate(() => window.scrollTo(0, Number.MAX_SAFE_INTEGER));
//     // await page.waitForTimeout(2000);
//     // if (allUrls) {
//     //     expect(await page.screenshot({ animations: 'disabled', fullPage: true })).toMatchSnapshot("toolbox.png");
//     // }
//     expect(await page.screenshot({ animations: 'disabled', fullPage: true })).toMatchSnapshot("toolbox.png");

// })