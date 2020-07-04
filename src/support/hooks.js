import {config} from '../../conf'
import {After,Before,BeforeAll,AfterAll,setDefaultTimeout
} from 'cucumber'
import {browser} from "protractor";
setDefaultTimeout(15000)
BeforeAll(async ()=>{
  await browser.waitForAngularEnabled(false)
   await browser.get(config.baseUrl);
})
