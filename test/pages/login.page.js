import sel from '../selectors/login-page.sel';
import exp from '../expected/login.exp';
import helpers from '../helpers/helpers.js';
import { assert } from 'chai';

class Login {

    errorPassEmpty() {
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
        let randomStr = helpers.random(105);
        $(sel.email).setValue(randomStr);
        let len = $(sel.email).getValue().length;
        assert.equal(len, exp.usernameMaxLength);
    }

    passMaxField() {
        browser.refresh();
        let randomStr = helpers.random(105);
        $(sel.pass).setValue(randomStr);
        let len = $(sel.pass).getValue().length;
        assert.equal(len, exp.passMaxLength);
    }

    userNotExistDisplayed() {
        browser.refresh();
        helpers.loginNegative();
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
        let pas = helpers.random(15);
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
        browser.refresh();
        helpers.loginNegative();
        $(sel.errorText).waitForDisplayed();
        $(sel.email).setValue("1");
        assert.isNotTrue($(sel.errorText).isDisplayed());
    }

}

export default new Login();