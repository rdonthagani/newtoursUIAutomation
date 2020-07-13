import {browser} from "protractor";
const timeOuts=require('../../testData/timeOuts.json')
class ElementHelper {
    async eleClick(ele){
     await browser.sleep(timeOuts.Duration.shortDuration)
     await ele.click();
    }
    async waitForElement(time){
        await browser.sleep(time)
    }
    async eleType(ele,text){
        await browser.sleep(timeOuts.Duration.shortDuration)
        await ele.sendKeys(text)
    }
    async mouseMoveElement(ele){
        await browser.actions().mouseMove(ele).perform()

    }
    async mouseMoveElementClick(ele){
        await browser.actions().mouseMove(ele).click().perform()

    }
}
export default ElementHelper