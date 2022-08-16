const { expect } = require("chai")
const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const { isTypedArray } = require("util/types");


const url = "http://localhost:3000"


describe("Test Countries Search", () => {
    it("Open Search Routing and execute search israel", async () => {
        let driver = await new Builder().forBrowser(Browser.CHROME).build();
        try {
            await driver.get(url);
            const nav = await driver.wait(until.elementLocated(By.id("LOGIN")));
            nav.click()
            const nav2 = await driver.wait(until.elementLocated(By.id("COUNTRIES")));
            nav2.click()
            const cinput = await driver.wait(until.elementLocated(By.id("c_input")));
            cinput.sendKeys("israel")
            const card = await driver.wait(until.elementLocated(By.id("israel")));
            const isCardExist = card && typeof card === 'object'
            expect(isCardExist).to.be.equal(true)
            await new Promise(r => setTimeout(r, 2000));
        } finally {
            setTimeout(async () => {
                await driver.quit();
            }, 3000);
        }
    })
})