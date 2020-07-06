import {Given, When, Then } from 'cucumber'
import Registration from '../pages/registrationpage'
const registrationPage = new Registration()

Given('user will on e-commerce application', async ()=>{

});

When(/^user will register$/, async ()=>{
    await registrationPage.signInPage();

});
When(/^by providing user details$/,{timeout:6*50000}, async ()=> {
    await registrationPage.registrationPage()

});
Then(/^user will login to the application$/, async ()=> {

});