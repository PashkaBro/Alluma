import data from '../test/data/login.username';
import loginSel from '../test/selectors/login-page.sel';
import headSel from '../test/selectors/header.sel';

class Base {

    openBase() {
        browser.url('/');
    }

    openForgot() {
        browser.url('/forgot');
    }

    moderLogin() {
        $(loginSel.email).setValue(data.moderLogin); //moderator login
        $(loginSel.pass).setValue(data.moderPass); //moderator pass
        $(loginSel.loginButton).click();
        $(headSel.logOutBtn).waitForExist(3000);
    }

    loginBtnKlick() {
        $(loginSel.loginButton).click();
    }

    userLogin(login, pass) { //call this function with two arguments (login, Password)
        $(loginSel.email).setValue(login); //you need to enter your login existing email
        $(loginSel.pass).setValue(pass); //correct pass
        $(loginSel.loginButton).click();
        $(headSel.logOutBtn).waitForExist(3000);
    }

}
export default new Base();