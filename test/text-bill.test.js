describe('Text Bill Widget', function () {
    it('should calculate the call total for 5 calls ', function () {
        var Caller = textBill();
        Caller.billItem('call');
        Caller.billItem('call');
        Caller.billItem('call');
        Caller.billItem('call');
        Caller.billItem('call');
       
    
        assert.equal('R'+13.75, Caller.callTotal());
    
    });

    it('should calculate the sms total for 3 sms\'', function () {
        var Caller = textBill();
        Caller.billItem('sms');
        Caller.billItem('sms');
        Caller.billItem('sms'); 
    
        assert.equal('R'+2.25, Caller.smsTotal());
    
    });

 
    it('should calculate the bill for 3 phone calls and 3 sms\' ', function () {
        var Caller = textBill();
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');

        assert.equal('R'+10.50, Caller.billTotal());

});





it('should not return a warning for a bill of R21', function(){
    var Caller = textBill();
    Caller.billItem('call');
    Caller.billItem('sms');
    Caller.billItem('call');
    Caller.billItem('sms');
    Caller.billItem('call');
    Caller.billItem('sms');
    Caller.billItem('call');
    Caller.billItem('sms');
    Caller.billItem('call');
    Caller.billItem('sms');
    Caller.billItem('call');
    Caller.billItem('sms'); 
    

    assert.equal('',Caller.level());
});


it('should return  warning for  bill  of R31.50', function(){
    var Caller = textBill();
    Caller.billItem('call');
    Caller.billItem('sms');
    Caller.billItem('call');
    Caller.billItem('sms');
    Caller.billItem('call');
    Caller.billItem('sms');
    Caller.billItem('call');
    Caller.billItem('sms');
    Caller.billItem('call');
    Caller.billItem('sms');
    Caller.billItem('call');
    Caller.billItem('sms');
    Caller.billItem('call');
    Caller.billItem('sms');
    Caller.billItem('call');
    Caller.billItem('sms');
    Caller.billItem('call');
    Caller.billItem('sms');

    assert.equal('warning', Caller.level());

});

it('should return  critical for bill of R73.5', function(){
    var Caller = textBill();
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');
        Caller.billItem('call');
        Caller.billItem('sms');

        assert.equal('critical', Caller.level());

});

   
    

   
})
