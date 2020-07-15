import {browser, element} from "protractor";
import ElementHelper from "../support/elementHelper";
import Assertions from "../support/assertions";

const timeOuts=require('../../testData/timeOuts.json');
const elementHelper = new ElementHelper()
const assertion =  new Assertions()
 class SearchAndShopping{

    constructor() {
        this.search=element(by.xpath("//input[@id='search_query_top']"));
        this.searchSelect=element(by.xpath("//*[@id='product']/div[2]/ul/li[1]"));
        this.itemName=element(by.xpath("//h1[@itemprop='name']"));
        this.itemDataSheet=element(by.xpath("//td[text()='Viscose']"));

    }

   async seachItem(){
       await elementHelper.eleType(this.search,'Printed')
       await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
       await browser.actions().doubleClick(this.searchSelect).perform()
      // await this.searchSelect.click()
       //await elementHelper.eleClick(this.searchSelect)


    }
    async assertionText(){
        await assertion.textAssertions(this.itemName,'Printed Summer Dress')
        await assertion.textAssertions(this.itemDataSheet,'Viscose')
    }


 }
export default SearchAndShopping