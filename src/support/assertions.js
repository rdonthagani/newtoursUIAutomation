const chai=require('chai').use(require('chai-as-promised'))

class Assertions {
    async textAssertions(element,value){
        await element.getText().then((text)=>{
            return expect(text).equal(value)
        })
    }
}
export default Assertions;