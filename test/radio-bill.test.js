describe('Radio Bill Widget', function () {
    it('should calculate the call total for 3 calls at R2.75 each', function () {
        var Call2 = radioBill();
        Call2.radioItem('call');
        Call2.radioItem('call');
        Call2.radioItem('call');
    
        assert.equal('R'+8.25, Call2.radioCallTotal());
    
    });

    it('should calculate the sms total for 5 sms\'', function () {
        var Call2 = radioBill();
        Call2.radioItem('sms');
        Call2.radioItem('sms');
        Call2.radioItem('sms'); 
        Call2.radioItem('sms');
        Call2.radioItem('sms'); 
    
        assert.equal('R'+3.75, Call2.radioSmsTotal());
    
    });

 
    it('should calculate the bill for 2 phone calls and 2 sms\' ', function () {
        var Call2 = radioBill();
        Call2.radioItem('call');
        Call2.radioItem('sms');
        Call2.radioItem('call');
        Call2.radioItem('sms');
      

        assert.equal('R'+7.00, Call2.radioTotal());

});





it('should not return a warning for a radio bill of R9.75', function(){
    var Caller = radioBill();
    Caller.radioItem('call');
    Caller.radioItem('sms');
    Caller.radioItem('call');
    Caller.radioItem('sms');
    Caller.radioItem('call');
  
    

    assert.equal('',Caller.levels());
});


it('should return  warning for  bill  of R34.25', function(){
    var Caller = radioBill();
    Caller.radioItem('call');
    Caller.radioItem('sms');
    Caller.radioItem('call');
    Caller.radioItem('sms');
    Caller.radioItem('call');
    Caller.radioItem('sms');
    Caller.radioItem('call');
    Caller.radioItem('sms');
    Caller.radioItem('call');
    Caller.radioItem('sms');
    Caller.radioItem('call');
    Caller.radioItem('sms');
    Caller.radioItem('call');
    Caller.radioItem('sms');
    Caller.radioItem('call');
    Caller.radioItem('sms');
    Caller.radioItem('call');
    Caller.radioItem('sms');
    Caller.radioItem('call');

    assert.equal('warning', Caller.levels());

});

it('should return  critical for bill of R62.25.5', function(){
    var Caller = radioBill();
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');;
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        Caller.radioItem('sms');
        Caller.radioItem('call');
        

        assert.equal( 'critical', Caller.levels());

});

})