import sel from '../selectors/login-page.sel';
import exp from '../expected/login.exp';
import { assert } from 'chai';

class Login {

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

    remindTxtAlgn() {
        let align = $('#info-text').getCSSProperty('text-align').value;
        assert.equal(align, exp.remTextAlign);
    }

    remindTxtSize() {
        let size = $('#info-text').getCSSProperty('font-size').parsed.value / 16;
        assert.equal(size, exp.remTextSize);
    }

    remindTxtColor() {
        let color = $('#info-text').getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.remTextColor);
    }

    remindTxt() {
        let txt = `${$('#info-text :first-child').getHTML(false)} ${$('#info-text :nth-child(2)').getHTML(false)} ${$('#info-text :nth-child(3)').getHTML(false)}`;
        assert.equal(txt, exp.remText);
    }


    usernameDisplayed() {
        $(sel.logo).waitForDisplayed(10000);
        let email = $(sel.email).isDisplayed();
        assert.isTrue(email);
    }

    passDisplayed() {
        $(sel.logo).waitForDisplayed(10000);
        let pass = $(sel.pass).isDisplayed();
        assert.isTrue(pass);
    }

    loginButtonDisplayed() {
        $(sel.logo).waitForDisplayed(10000);
        let btnLogin = $(sel.btnLogin).isDisplayed();
        assert.isTrue(btnLogin);
    }

    reminderBtnDisplayed() {
        $(sel.logo).waitForDisplayed(10000);
        let btnReminder = $(sel.btnReminder).isDisplayed();
        assert.isTrue(btnReminder);
    }

    usernamePlaceholder() {
        let placeholder = $(sel.email).getProperty('placeholder');
        assert.equal(placeholder, exp.usernamePlaceholder);
    }

    passPlaceholder() {
        let placeholder = $(sel.pass).getProperty('placeholder');
        assert.equal(placeholder, exp.passPlaceholder);
    }

    loginBtnBackground() {
        $(sel.logo).waitForDisplayed(10000);
        let bgColor = $(sel.btnLogin).getCSSProperty('background-color').parsed.hex;
        assert.equal(bgColor, exp.btnLoginBg);
    }

    loginBtnText() {
        let text = $(sel.btnLogin).getHTML(false);
        assert.equal(text, exp.btnLoginTxt);
    }

    loginBtnColor() {
        let color = $(sel.btnLogin).getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.btnLoginClr);
    }

    remindBtnBackground() {
        let bgColor = $(sel.btnReminder).getCSSProperty('background-color').parsed.hex;
        assert.equal(bgColor, exp.btnRemindBg);
    }

    remindBtnText() {
        $(sel.btnReminder).waitForDisplayed(10000);
        let text = $(sel.btnReminder).getHTML(false);
        assert.equal(text, exp.btnRemindTxt);
    }

    remindBtnColor() {
        let color = $(sel.btnReminder).getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.btnRemindClr);
    }

    errorUsernameEmpty() {
        $(sel.btnLogin).click();
        let error = $(sel.errorText).isDisplayed();
        assert.isTrue(error);
    }

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
        assert.isTrue(login > error) || assert.isTrue(error > pass);
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
        $(sel.loginButton).click();
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