import data from '../data/login.username';
import loginSel from '../selectors/login-page.sel';
import headSel from '../selectors/header.sel';
import { assert } from 'chai';

class Base {

    openBase() {
        browser.url('/');
    }

    openForgot() {
        browser.url('/forgot');
    }
    
    openUsers() {
        browser.url('/users');
    }

    moderLogin() {
        this.openBase();
        $(loginSel.email).setValue(data.moderLogin); //moderator login
        $(loginSel.pass).setValue(data.moderPass); //moderator pass
        $(loginSel.btnLogin).click();
        $(headSel.logOutBtn).waitForDisplayed();
    }

    testLogin() {
        this.openBase();
        $(loginSel.email).setValue(data.testLogin); //test login
        $(loginSel.pass).setValue(data.testPass); //test pass
        $(loginSel.btnLogin).click();
        $(headSel.logOutBtn).waitForExist(3000);
    }

    anyUserLogin(login, pass) { //call this function with two arguments (login, Password)
        this.openBase()
        $(loginSel.email).setValue(login); //you need to enter your login existing email
        $(loginSel.pass).setValue(pass); //correct pass
        $(loginSel.btnLogin).click();
        $(headSel.logOutBtn).waitForDisplayed(3000);
    }

    allPlayersBtnClick() {
        $(headSel.allPlayerBtn).click();
        //add waitForDisplay()
    }

    logoutBtnСlick() {
        $(headSel.logOutBtn).click();
        $(loginSel.logo).waitForDisplayed();
    }

    randomString(max) { //you need to set value for string length
        let str = '';
        for (let i = 1; i <= max; i++) {
            str += String.fromCharCode(Math.random() * (126 - 35) + 35)
        }
        return str
    }

    validatePlaceholderBySelector(selector, expectedPlaceholder) {
        const actualPlaceholder = $(selector).getAttribute('placeholder');
        assert.equal(actualPlaceholder, expectedPlaceholder);
    }

}
export default Base;
