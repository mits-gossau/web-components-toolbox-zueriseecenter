const {test, expect} = require('@playwright/test');

test('test', async({page}) =>{
    await page.goto('/src/es/components/web-components-toolbox/docs/Template.html?rootFolder=src&css=./src/css/variablesCustom.css&logo=./src/es/components/web-components-toolbox/src/es/components/atoms/logo/default-/default-.html&nav=./src/es/components/web-components-toolbox/src/es/components/molecules/navigation/default-/default-.html&footer=./src/es/components/web-components-toolbox/src/es/components/organisms/footer/default-/default-.html&content=./src/es/components/pages/Test.html');
    await page.waitForEvent('domcontentloaded')
    console.log(await page.locator('html > body').getAttribute('wc-config-load'));
    const wcConfigLoaded = await page.locator('html > body').getAttribute('wc-config-load')
    if(wcConfigLoaded){
        expect(await page.screenshot({fullPage:true})).toMatchSnapshot();
    }
})