describe('Settings Bill Widget', function(){
    it('should be able to set the call cost',function(){
        let settingsBill = billSettings();
        settingsBill.setCallCost(1.85);
        assert.equal(1.85,settingsBill.getCallCost());    

        let settingsBill1 = billSettings();
        settingsBill1.setCallCost(1.85);
        assert.equal(1.85,settingsBill1.getCallCost()); 

    })

    it('should be able to set the sms cost',function(){
        let settingsBill = billSettings();
        settingsBill.setSmsCost(0.85);
        assert.equal(0.85,settingsBill.getSmsCost());    

        let settingsBill1 = billSettings();
        settingsBill1.setSmsCost(2.00);
        assert.equal(2.00,settingsBill1.getSmsCost()); 

    })

    it('should be able to set the call and sms cost',function(){
        let settingsBill = billSettings();
        settingsBill.setCallCost(5.00);
        settingsBill.setSmsCost(2.85);
        assert.equal(5.00,settingsBill.getCallCost()); 
        assert.equal(2.85,settingsBill.getSmsCost());    

        let settingsBill1 = billSettings();
        settingsBill1.setCallCost(3.00);
        settingsBill1.setSmsCost(2.00);
        assert.equal(3.00,settingsBill1.getCallCost()); 
        assert.equal(2.00,settingsBill1.getSmsCost());    

      

    })

    it('should be able to set the warning level',function(){
        let settingsBill = billSettings();
        settingsBill.setWarning(20.00);
        assert.equal(20.00,settingsBill.getWarning());    

        let settingsBill1 = billSettings();
        settingsBill1.setWarning(15.00);
        assert.equal(15.00,settingsBill1.getWarning()); 

    })

    it('should be able to set the critical level',function(){
        let settingsBill = billSettings();
        settingsBill.setCritical(50.00);
        assert.equal(50.00,settingsBill.getCritical());    

        let settingsBill1 = billSettings();
        settingsBill1.setWarning(35.00);
        assert.equal(35.00,settingsBill1.getWarning()); 

    })
    it('should be able to set the warning and critical level',function(){
        let settingsBill = billSettings();
        settingsBill.setWarning(10.00);
        settingsBill.setCritical(30.00);
        assert.equal(30.00,settingsBill.getCritical());    
        assert.equal(10.00,settingsBill.getWarning()); 

    })
})

describe('Use values for Settings Widget', function(){
    it('should be able to use the call cost values',function(){
        let settingsBill = billSettings();
        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarning(2);
        settingsBill.setCritical(10);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(6.75,settingsBill.getTotalCost());
        assert.equal(6.75,settingsBill.getTotalCallCost());
        assert.equal(0.00,settingsBill.getTotalSmsCost()); 

    })

    it('should be able to use the sms cost values',function(){
        let settingsBill = billSettings();
        settingsBill.setCallCost(5.25);
        settingsBill.setSmsCost(3.00);
        settingsBill.setWarning(5);
        settingsBill.setCritical(30);

        settingsBill.sendSms();
        settingsBill.sendSms();  
        settingsBill.sendSms();

        assert.equal(9.00,settingsBill.getTotalCost());
        assert.equal(0.0,settingsBill.getTotalCallCost());
        assert.equal(9.00,settingsBill.getTotalSmsCost()); 

    })

    it('should be able to use the call value of R5.00 and sms value of R1.50 to calculate the bill total ',function(){
        let settingsBill = billSettings();
        settingsBill.setCallCost(5.00);
        settingsBill.setSmsCost(1.50);
        settingsBill.setWarning(12);
        settingsBill.setCritical(20);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.sendSms();

        assert.equal(16.50,settingsBill.getTotalCost());
        assert.equal(15.00,settingsBill.getTotalCallCost());
        assert.equal(1.50,settingsBill.getTotalSmsCost());

           

       

    })
})

describe('Warning and critical level for Settings Widget', function(){
    it('should return a class name "warning" if warning level is reached',function(){
        let settingsBill = billSettings();
        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarning(8);
        settingsBill.setCritical(30);


        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.sendSms();
        settingsBill.makeCall();
        settingsBill.sendSms();
       


        assert.equal('warning',settingsBill.totalClassName());
         

    })

    it('should return a class name "critical" if critical level is reached',function(){
        let settingsBill = billSettings();
        settingsBill.setCallCost(5.00);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarning(5);
        settingsBill.setCritical(15);


        settingsBill.makeCall();
        settingsBill.sendSms();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.sendSms();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();


       
        assert.equal('critical',settingsBill.totalClassName());    

    })
})