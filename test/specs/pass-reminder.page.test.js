import login from '../pages/login.page';
import remind from '../pages/pass-reminder.page'


describe('Login-page', function () {

    it('Open-homepage', function () {
      login.open();
    })

    it('Open-pass-reminder', function() {
        remind.goToPage();
    })

    it('Empty-email-field-error', function() {
        remind.clickRemindPass();
        remind.errorTextDisplayed();
    })

    it('Empty-field-error-text', function() {
      remind.errorText();
    })

    

    it('Error-text-between-email-and-button', function() {
      remind.errorTextLocate();    
     })

     it('Error-text-align-center', function() {
      remind.errorTextAlign();    
     })

})