
import {browser, element} from "protractor";

import ElementHelper from "../support/elementHelper";
const fs=require('file-system')
const jsonFile=require('jsonfile')
const _=require('lodash')
const loginDetails=require('../../testData/loginDetails.json')
const timeOuts=require('../../testData/timeOuts.json');
const registration=require('../../testData/registration.json')
const moment=require('moment')
const elementHelper = new ElementHelper()
const testUserEmailId= "user"+moment().format("DDMMYYYYHHmmss")+"@gmail.com";


class Registration{


    constructor() {

        this.signIn=element(by.xpath("//a[contains(text(),'Sign in')]"));
        this.emailId=element(by.xpath("//input[@id='email_create']"));
        this.createAccount = element(by.xpath("//button[@id='SubmitCreate']"));
        this.titleAccount=element(by.xpath("//input[@id='id_gender1']"));
        this.accountFirstName=element(by.xpath("//input[@id='customer_firstname']"));
        this.accountLastName=element(by.xpath("//input[@id='customer_lastname']"));
        this.accountPWD=element(by.xpath("//input[@id='passwd']"));
        this.selectDay=element(by.xpath("//select[@id='days']"));
        this.days=element(by.xpath("//option[@value='"+registration.RegistrationDetails.days+"']"));
        this.selectMonth=element(by.xpath("//select[@id='months']"));
        this.month=element(by.xpath("//option[contains(text(),'"+registration.RegistrationDetails.month+"')]"));
        this.selectYear=element(by.xpath("//select[@id='years']"));
        this.year=element(by.xpath("//option[@value='"+registration.RegistrationDetails.year+"']"));
        this.offers=element(by.xpath("//input[@id='optin']"));
        this.newsLetter=element(by.xpath("//input[@id='newsletter']"));
        this.firstName=element(by.xpath("//input[@id='firstname']"));
        this.lastName=element(by.xpath("//input[@id='lastname']"));
        this.adresses=element(by.xpath("//input[@id='address1']"));
        this.city=element(by.xpath("//input[@id='city']"));
        this.selectState=element(by.xpath("//select[@id='id_state']"));
        this.state=element(by.xpath("//option[text()='"+registration.RegistrationDetails.state+"']"));
        this.postcode=element(by.xpath("//input[@id='postcode']"));
        this.selectCountry=element(by.xpath("//select[@id='id_country']"));
        this.country=element(by.xpath("//option[text()='"+registration.RegistrationDetails.country+"']"));
        this.mobileNumber=element(by.xpath("//input[@id='phone_mobile']"));
        this.registerButton=element(by.xpath("//button[@id='submitAccount']"));


    }

    async signInPage(){
      await elementHelper.eleClick(this.signIn)
      await elementHelper.eleType(this.emailId,loginDetails.emailID)
      await elementHelper.eleClick(this.createAccount)
      await elementHelper.waitForElement(timeOuts.Duration.longDuration)
    }

    async registrationPage(){
        await elementHelper.eleClick(this.titleAccount)
        await elementHelper.eleType(this.accountFirstName,registration.RegistrationDetails.accountFirstName)
        await elementHelper.eleType(this.accountLastName,registration.RegistrationDetails.accountLastName)
        await elementHelper.eleType(this.accountPWD,registration.RegistrationDetails.accountPWD)
        await elementHelper.eleClick(this.selectDay)
        await elementHelper.eleClick(this.days)
        await elementHelper.eleClick(this.selectMonth)
        await elementHelper.eleClick(this.month)
        await elementHelper.eleClick(this.selectYear)
        await elementHelper.eleClick(this.year)
        await elementHelper.eleClick(this.offers)
        await elementHelper.eleClick(this.newsLetter)
        await elementHelper.eleType(this.firstName,registration.RegistrationDetails.firstName)
        await elementHelper.eleType(this.lastName,registration.RegistrationDetails.lastName)
        await elementHelper.eleType(this.adresses,registration.RegistrationDetails.adresses)
        await elementHelper.eleType(this.city,registration.RegistrationDetails.city)
        await elementHelper.eleClick(this.selectState)
        await elementHelper.eleClick(this.state)
        await elementHelper.eleType(this.postcode,registration.RegistrationDetails.postcode)
        await elementHelper.eleClick(this.selectCountry)
        await elementHelper.eleClick(this.country)
        await elementHelper.eleType(this.mobileNumber,registration.RegistrationDetails.mobileNumber)
        await elementHelper.eleClick(this.registerButton)
        await elementHelper.waitForElement(timeOuts.Duration.longDuration)
    }
    async writeJsonData(){
      await jsonFile.readFile('../../testData/loginDetails.json',(err)=>{
            if(err)
                throw err
            var jsonData=require('../../testData/loginDetails.json')
            _.set(jsonData,'emailID',testUserEmailId)
             fs.writeFile('../../testData/loginDetails.json',JSON.stringify(jsonData,null,2),"utf8",(err)=>{
                if(err)
                    throw err
                console.log('file updated')
            })

        })

    }

}
export default Registration

