// require('chromedriver') WITHOUT COMMENT!
const { expect } = require("chai")
const { Builder, Browser, By, Key, until } = require('selenium-webdriver');


// expect(true).to.be.equal(true)
const url = "http://localhost:3000"


describe("Test Countries Search", function () {
    it("Open countries routing", async function () {
        let driver = await new Builder().forBrowser(Browser.CHROME).build();
        try {
            await driver.get(url);
            // const nav = await driver.wait(until.elementLocated(By.xpath("//*[@_data-t-nav='LOGIN']")));
            const nav = await driver.wait(until.elementLocated(By.id("LOGIN")));
            const text = await nav.getText()
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
    // it("New Girsa Hatzmada", async () => {
    //     let driver = await new Builder().forBrowser(Browser.CHROME).build();
    //     try {
    //         await driver.get(budgetUrl);
    //         await new Promise(r => setTimeout(r, 2000));
    //         const buttonAdd = await driver.findElement(By.className("p-element btn-color p-button p-component ng-star-inserted"));
    //         buttonAdd.click()
    //         await new Promise(r => setTimeout(r, 2000));
    //         const elements = await driver.findElements(By.className('p-inputtext p-component p-element ng-untouched ng-dirty ng-invalid ng-star-inserted'))
    //         elements[0].sendKeys(`automation_girsa_${new Date().getTime()}`)
    //         elements[1].sendKeys("8")
    //         // const edit = await driver.findElement(By.className('p-button-icon pi pi-pencil'))
    //         // edit.click()
    //         await new Promise(r => setTimeout(r, 1000));
    //         const save = await driver.findElement(By.className('p-button-icon pi pi-check'))
    //         save.click();
    //         await new Promise(r => setTimeout(r, 1500));
    //         const close = await driver.findElement(By.className('p-toast-icon-close-icon pi pi-times'))
    //         const isElementExist = close !== null
    //         close.click()
    //         expect(isElementExist).to.be.equal(true)
    //         // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    //     } finally {
    //         setTimeout(async () => {
    //             await driver.quit();
    //         }, 5000);
    //     }
    // })
})
