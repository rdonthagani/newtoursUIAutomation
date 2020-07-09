import {browser, element} from "protractor";
import ElementHelper from "../support/elementHelper";
const timeOuts=require('../../testData/timeOuts.json');
const elementHelper = new ElementHelper()
class ShoppingPage{

    constructor() {

    this.tshirts =element(by.xpath("//*[@id='block_top_menu']/ul/li[3]/a"));
    this.selectedItem=element(by.xpath("//img[@title='Faded Short Sleeve T-shirts']"));

    this.selectSize=element(by.xpath("//select[@id='group_1']"));
    this.size=element(by.xpath("//option[text()='M']"));
    this.color=element(by.xpath("//a[@name='Blue']"));
    this.addToCart=element(by.xpath("//span[text()='Add to cart']"));
    this.proceedToCheckout=element(by.xpath("//span[contains(text(),'Proceed to checkout')]"));
    this.proceedTocheckoutTwo=element(by.xpath("//span[text()='Proceed to checkout']"));
    this.terms=element(by.xpath("//input[@type='checkbox']"));
    this.proceedTocheckoutfourth=element(by.xpath("//button[@name='processCarrier']"));
    this.payType=element(by.xpath("//a[@class='bankwire']"));
    this.confirmOrder=element(by.xpath("//span[text()='I confirm my order']"));
        }
    async shoppingTshirt(){

        await elementHelper.eleClick(this.tshirts)
        await elementHelper.eleClick(this.selectedItem)
        await elementHelper.waitForElement(timeOuts.Duration.longDuration)
        await elementHelper.eleClick(this.selectSize)
        await elementHelper.eleClick(this.size)
        await elementHelper.eleClick(this.color)
        await elementHelper.eleClick(this.addToCart)
    }
    async checkout(){
        await elementHelper.eleClick(this.proceedToCheckout)
        await elementHelper.eleClick(this.proceedTocheckoutTwo)
        await elementHelper.eleClick(this.proceedTocheckoutTwo)
        await elementHelper.eleClick(this.terms)
        await elementHelper.eleClick(this.proceedTocheckoutfourth)

    }
    async order(){
        await elementHelper.eleClick(this.payType)
        await elementHelper.eleClick(this.confirmOrder)
        }

}
export default ShoppingPage;