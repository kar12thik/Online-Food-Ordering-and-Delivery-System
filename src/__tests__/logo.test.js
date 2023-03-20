describe("Logo", () => {
  beforeAll(async () => {
    await page.goto("https://example.com");
  });

  it("should display the correct logo", async () => {
    const logo = await page.$('link[rel="icon"]');
    const href = await logo.getProperty("href");
    expect(href).toMatch(/example\.com\/favicon\.ico/);
  });
});

// const { chromium } = require("playwright");
// let browser, page;

// describe("Logo", () => {
//   beforeAll(async () => {
//     browser = await chromium.launch();
//     page = await browser.newPage();
//   });

//   it("should display the correct logo", async () => {
//     await page.goto(window.location.href);
//     const logo = await page.$('link[rel="icon"]');
//     const href = await logo.getProperty("href");
//     expect(href).toMatch(/example\.com\/favicon\.ico/);
//   });

//   afterAll(async () => {
//     await browser.close();
//   });
// });
