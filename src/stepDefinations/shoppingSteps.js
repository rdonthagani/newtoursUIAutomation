import {Given,When, Then} from 'cucumber'
import ShoppingPage from '../pages/ShoppingPage'

const shopping = new ShoppingPage();

Then(/^user start shopping items$/, async()=> {
   await shopping.shoppingTshirt()
});

Then(/^user will proceed for order$/, async()=> {
    await shopping.checkout()
});

Then(/^user will ordered items$/, async()=> {
    await shopping.order()
});