import login from '../pages/login.page';

describe('Login-form', function () {

    it('Username-field-displayed', function () {
    login.usernameDisplayed();
    })

    it('Password-field-displayed', function () {
    login.passField();
     })

    it('Login-button-displayed', function () {
    login.loginBtn();
     })

    it('Remind-Password-button-displayed', function () {
    login.remindPassBtn();
     })

    it('User-placeholder-correct', function () {
    login.userPlaceholder();
    })
        
    it('Password-placeholder-correct', function () {
    login.PassPlaceholder();
    })
      
    it('Login-button-background-color', function () {
    login.loginBtnBgc();
    })
      
    it('Login-button-text', function () {
    login.loginBtnText();
    }) 

    it('Login-button-text-color', function () {
    login.loginBtnTextColor();
    }) 

    it('Remind-button-background-color', function () {
    login.RemindPassBtnBgc();
    })

    it('Remind-button-text', function () {
    login.RemindBtnText();
     }) 

    it('Remind-button-text-color', function () {
    login.RemindBtnTextColor();
     }) 

});