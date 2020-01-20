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

    errorEmpty() {
        browser.url('/');
        $(sel.btnLogin).click();
        let error = $(sel.errorText).isDisplayed();
        assert.isTrue(error);
    }

    errorAlign() {
        $(sel.btnLogin).click();
        let error = $(sel.errorText).getCSSProperty('text-align').value;
        assert.equal(error, exp.errorAlign);
    }

    errorLocated() {
        $(sel.btnLogin).click();
        let pass = $(sel.pass).getLocation('y');
        let login = $(sel.btnLogin).getLocation('y');
        let error = $(sel.errorText).getLocation('y');
        assert.isTrue(login > error && error > pass);
    }

    errorSize() {
        $(sel.btnLogin).click();
        let error = $(sel.errorText).getCSSProperty('font-size').parsed.value / 16
        assert.equal(error, exp.errorSize);
    }

    errorFont() {
        $(sel.btnLogin).click();
        let error = $(sel.errorText).getCSSProperty('font-family').parsed.value[2];
        assert.equal(error, exp.errorFont);
    }

    usernameMaxField() {
        let randomStr = this.randomString(105);
        $(sel.email).setValue(randomStr);
        let len = $(sel.email).getValue().length;
        assert.equal(len, exp.usernameMaxLength);
    }

    passMaxField() {
        browser.refresh();
        let randomStr = this.randomString(105);
        $(sel.pass).setValue(randomStr);
        let len = $(sel.pass).getValue().length;
        assert.equal(len, exp.passMaxLength);
    }

    userNotExistDisplayed() {
        browser.refresh();
        let username = this.randomString(15);
        let pas = this.randomString(15);
        $(sel.email).setValue(username);
        $(sel.pass).setValue(pas);
        $(sel.btnLogin).click();
        $(sel.errorText).waitForDisplayed();
        assert.isTrue($(sel.errorText).isDisplayed());
    }

    userNotExistText() {
        assert.equal($(sel.errorText).getHTML(false), exp.userNotExistText);
    }

    userNotExistColor() {
        assert.equal($(sel.errorText).getCSSProperty('color').parsed.rgba, exp.userNotExistColor);
    }

    passIncorrect() {
        browser.refresh();
        let username = 'admin';
        let pas = this.randomString(15);
        $(sel.email).setValue(username);
        $(sel.pass).setValue(pas);
        $(sel.btnLogin).click();
        $(sel.errorText).waitForDisplayed();
        assert.isTrue($(sel.errorText).isDisplayed());
    }

    passIncorrectText() {
        assert.equal($(sel.errorText).getHTML(false), exp.passIncorrectText);
    }

    passIncorrectColor() {
        assert.equal($(sel.errorText).getCSSProperty('color').parsed.rgba, exp.passIncorrectColor);
    }

    usernameChange() {
        $(sel.email).setValue("1");
        assert.isNotTrue($(sel.errorText).isDisplayed());
    }

    passChange() {
        $(sel.errorText).waitForDisplayed(5000, true);
        let username = this.randomString(15);
        let pas = this.randomString(15);
        $(sel.email).setValue(username);
        $(sel.pass).setValue(pas);
        $(sel.btnLogin).click();
        $(sel.errorText).waitForDisplayed();
        $(sel.pass).setValue("1");
        assert.isNotTrue($(sel.errorText).isDisplayed());
    }

}

export default new Login();