import data from '../test/data/login.username';
import loginSel from '../test/selectors/login-page.sel';
import headSel from '../test/selectors/header.sel';

class Base {

    openBase(){
        browser.url('/');
}

    openForgot(){
        browser.url('/forgot');
}

    moderLogin(){
        $(loginSel.email).setValue(data.moderLogin); //existing email
        $(loginSel.pass).setValue(data.moderPass); //correct pass
        $(loginSel.loginButton).click();
        $(headSel.logOutBtn).waitForExist(3000); //no code exist for login functionality. I NEED THIS FOR MY TESTS!!!!!!
    }

    loginBtnKlick(){
        $(loginSel.loginButton).click();
    }

    userLogin(login, pass){
        $(loginSel.email).setValue(login); //you need to enter your login existing email
        $(loginSel.pass).setValue(pass); //correct pass
        $(loginSel.loginButton).click();
        $(headSel.logOutBtn).waitForExist(3000);
    }

}
export default new Base();