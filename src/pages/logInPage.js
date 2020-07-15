import {browser, element} from "protractor";
import ElementHelper from "../support/elementHelper";
const loginDetails=require('../../testData/loginDetails.json')
const timeOuts=require('../../testData/timeOuts.json');
const elementHelper = new ElementHelper()

class LogInpage{

    constructor() {
        this.signIn=element(by.xpath("//a[contains(text(),'Sign in')]"))
        this.emailAdress=element(by.xpath("//input[@id='email']"))
        this.password=element(by.xpath("//input[@id='passwd']"))
        this.signInButton=element(by.xpath("//button[@id='SubmitLogin']"))
        this.dressesmenu=element(by.xpath("//*[@id='block_top_menu']/ul/li[2]/a"))
        this.dresseslink=element(by.xpath("//*[@id='block_top_menu']/ul/li[2]/ul/li[3]/a"))


    }
    async logIn(){
        await elementHelper.eleClick(this.signIn)
        await elementHelper.eleType(this.emailAdress,loginDetails.emailID)
        await elementHelper.eleType(this.password,loginDetails.password)
        await elementHelper.eleClick(this.signInButton)
    }

    async selectItem(){
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
        await elementHelper.mouseMoveElement(this.dressesmenu)
        await elementHelper.waitForElement(timeOuts.Duration.longDuration)
        await elementHelper.mouseMoveElementClick(this.dresseslink)
        await elementHelper.waitForElement(timeOuts.Duration.longDuration)

    }

}
export default LogInpage;
