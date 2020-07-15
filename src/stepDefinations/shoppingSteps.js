import {Given,When, Then} from 'cucumber'
import ShoppingPage from '../pages/ShoppingPage'
import LogInpage from "../pages/logInPage";
import SearchAndShopping from "../pages/searchAndShopping";


const shopping = new ShoppingPage();
const login=new LogInpage();
const search=new SearchAndShopping();

Then(/^user start shopping items$/,{timeout:6*50000}, async()=> {
   await shopping.shoppingTshirt()

});

Then(/^user will proceed for order$/, async()=> {
    await shopping.checkout()
});

Then(/^user will ordered items$/, async()=> {
    await shopping.order()
});

Then(/^user will logout from account$/, async ()=> {
    await shopping.SignOut()

});
Given(/^User will login to the Account$/, async ()=> {
    await login.logIn()

});
Then(/^User will Selet items$/, async ()=> {
    await login.selectItem()

});
Then(/^User will purchase the items$/, async ()=> {

});
Then(/^User will search Items$/, async ()=> {
    await search.seachItem()

});
Then(/^User will validate seached Items$/, async ()=> {
    await search.assertionText()
});