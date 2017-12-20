var expect=require('expect');
var {generateMessage}=require('./message')
describe('generateMessage',()=>{
    it('should genrate a message',()=>{
        var from="vnayk";
        var text="something";
        var message=generateMessage(from,text);
        
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
    })
})