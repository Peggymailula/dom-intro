describe('Calculate Bill Widget', function(){
    it('should calculate the bill of two phone call entries', function(){
        var Call1 = calculateBill();
       Call1.getBillItem('call,call');
      
     
        assert.equal('R'+ 5.50,Call1.getBillTotal());
    });
    it('should calculate the bill of two sms entries', function(){
        var Call1 = calculateBill();
       Call1.getBillItem('sms,sms');
      
     
        assert.equal('R'+ 1.50,Call1.getBillTotal());
    });
    it('should calculate the bill of four sms and three phone call entries', function(){
        var Call1 = calculateBill();
       Call1.getBillItem('sms,sms,sms,sms,call,call,call');
      
     
        assert.equal('R'+ 11.25,Call1.getBillTotal());
    });

    it('should not return a warning for a bill of R11.75', function(){
        var Call2 = calculateBill();
        Call2.getBillItem('call,call,call,sms,call')
       Call2.getBillTotal();
        assert.equal('',Call2.totallevel());
    });
    

    it('should return  warning for  bill  of R23.50', function(){
        var Call2 = calculateBill();
        Call2.getBillItem('call,call,call,sms,call,call,call,sms,call,call');
       Call2.getBillTotal();
        assert.equal('warning',Call2.totallevel());
    });

    it('should return  critical for bill of R36', function(){
        var Call2 = calculateBill();
       Call2.getBillItem('call,call,call,sms,call,call,call,sms,call,call,call,sms,call,call,call,sms');
       Call2.getBillTotal();
        assert.equal('critical',Call2.totallevel());
    });
})
