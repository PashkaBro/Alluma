import sel from '../selectors/login-page.sel';
import exp from '../expected/login.exp';
import { assert } from 'chai';
import Base from './base';

class Login extends Base {

    open() {
        browser.url('/');
        $(sel.logo).waitForDisplayed();
    }

    logoDisplayed() {
        $(sel.logo).isDisplayed();
    }

    formDisplayed() {
        $(sel.form).isDisplayed();
    }

    reminderTxtDisplayed() {
        $(sel.reminderTxt).isDisplayed();
    }

    logoAlignment() {
        let textAlign = $(sel.logo).getCSSProperty('text-align');
        assert.equal(textAlign.value, exp.logoAlign);
    }

    logoHeight() {
        let height = $(sel.logo).getCSSProperty('height');
        assert.equal(height.value, exp.logoHeight);
    }

    usernameDisplayed() {
        $(sel.email).isDisplayed();
    }

    passField() {
        $(sel.pass).isDisplayed();
    }

    loginBtn() {
        $(sel.loginButton).isDisplayed();
    }

    remindPassBtn() {
        $(sel.remindButton).isDisplayed();
    }

    userPlaceholder() {
        let uPlace = $(sel.email).getAttribute('placeholder');
        assert.equal(uPlace, exp.usernamePlaceholder);
    }

    PassPlaceholder() {
        let pPlace = $(sel.pass).getAttribute('placeholder');
        assert.equal(pPlace, exp.passPlaceholder);
    }

    loginBtnBgc() {
        let bgc = $(sel.loginButton).getCSSProperty('background-color');
        assert.equal(bgc.value, exp.btnLoginBg);
    }

    loginBtnText() {
        let lbt = $(sel.loginButton).getText();
        assert.equal(lbt, exp.btnLoginTxt);
    }

    loginBtnTextColor() {
        let textColor = $(sel.loginButton1).getCSSProperty('color');
        assert.equal(textColor.value, exp.btnLoginClr);
    }

    RemindPassBtnBgc() {
        let bgc = $(sel.remindButton).getCSSProperty('background-color');
        assert.equal(bgc.value, exp.btnRemindBg);
    }

    RemindBtnText() {
        let rbt = $(sel.remindButton1).getText();
        assert.equal(rbt, exp.btnRemindTxt);
    }

    RemindBtnTextColor() {
        let textColor = $(sel.remindButton1).getCSSProperty('color');
        assert.equal(textColor.value, exp.btnRemindClr);
    }

}

export default new Login();