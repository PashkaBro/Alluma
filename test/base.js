import data from '../test/data/login.username'
class base {

    openBase(){
        browser.url('/');
}

    openForgot(){
        browser.url('/forgot');
}

    moderLogin(){
        $('#email').setValue(data.moderLogin); //existing email
        $('#pass').setValue(data.moderPass); //correct pass
        $('.btn-primary').click();
        $('#btn-logout').waitForExist(3000); //no code exist for login functionality. I NEED THIS FOR MY TESTS!!!!!!
    }

    loginBtnKlick(){
        $('.btn-primary').click();
    }

    userLogin(login, pass){
        $('#email').setValue(login); //existing email
        $('#pass').setValue(pass); //correct pass
        $('.btn-primary').click();
        $('#btn-logout').waitForExist(3000);
    }
}
export default new Base();