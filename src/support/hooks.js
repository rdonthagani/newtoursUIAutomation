import {config} from '../../conf'
import {After,Before,BeforeAll,AfterAll,setDefaultTimeout
} from 'cucumber'
import {browser} from "protractor";
setDefaultTimeout(15000)
BeforeAll(async ()=>{
  await browser.waitForAngularEnabled(false)
   await browser.get(config.baseUrl);
})

After (function (scenario, done) {
    const world = this
    if(scenario.result.status==='failed'){
        browser.takeScreenshot().then(function (stream) {
            let decodedImage = new Buffer(stream.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
            world.attach(decodedImage, 'image/png');
        }).then(function () {
            done();
        })
    }
    else {
        done();
    }
})