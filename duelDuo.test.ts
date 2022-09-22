
import { Builder, Capabilities, By } from "selenium-webdriver"
import { Executor } from "selenium-webdriver/http"
import { titleContains } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://127.0.0.1:5500/public/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000);
})


test('clicking draw button displays choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click();
    await driver.sleep(500)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000);
})

test('can select bots', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click();
    const button = await driver.findElement(By.className('bot-btn'))
    await button.click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)

})