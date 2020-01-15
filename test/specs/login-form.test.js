import login from '../pages/login.page';

describe('Login-form', function () {

    it('UserName-field-displayed', function () {
    login.userName();
    })


    it('Password-field-displayed', function () {
    login.passField();
     })

    it('Login-button-displayed', function () {
    login.loginBtn();
     })


    it('RemPass-button-displayed', function () {
    login.remindPassBtn();
     })

     it('User-placeholder-correct', function () {
        login.userPlaceholder();
         })

        
     it('Password-placeholder-correct', function () {
     login.PassPlaceholder();
     })
        
             

});