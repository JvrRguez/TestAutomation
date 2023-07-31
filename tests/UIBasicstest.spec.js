const { test, expect } = require("@playwright/test");

/*
test('Browser Context Playwright test',async ({browser})=>
{   
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePracrise/")
});

test('Navigate Samsung test',async ({page})=>
{   
   await page.goto("https://www.samsung.com.mx/")

   const mobileMenu = page.locator('//button[contains(text(),\'Mobile\')]');
   await expect(mobileMenu).toBeVisible();
   await mobileMenu.click();

   const deviceSelect = page.locator("p", {hasText: "Galaxy S23 Ultra"}).first();
   await expect(deviceSelect).toBeVisible();
   await mobileMenu.click();

});
*/

test('Android Compare test',async ({page})=>
{   
   await page.goto("https://androidenterprisepartners.withgoogle.com/devices/")

   const mobileMenu = page.locator('//button[contains(text(),\'Mobile\')]');
   await expect(mobileMenu).toBeVisible();
   await mobileMenu.click();

   const deviceSelect = page.locator("p", {hasText: "Galaxy S23 Ultra"}).first();
   await expect(deviceSelect).toBeVisible();
   await mobileMenu.click();

});

