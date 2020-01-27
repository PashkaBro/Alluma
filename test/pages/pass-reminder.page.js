import sel from '../selectors/pass-reminder.page.sel';
import homeSel from '../selectors/login-page.sel';
import exp from '../expected/pass-reminder.exp';
import { assert } from 'chai';
import Base from './base';

class Reminder extends Base {

    clickRemindPass() {
        $(sel.remindBtn).click();
    }

    errorTextDisplayed() {
        $(sel.errorText).waitForDisplayed();
    }

    errorTextColor() {
        let textColor = $(sel.errorText).getCSSProperty('color').parsed.hex;
        assert.equal(textColor, exp.errorColor);
    }

    errorText() {
        let textError = $(sel.errorText).getText();
        assert.equal(textError, exp.errorEmpty);
    }

    errorTextLocate() {          //Error message should be located between e-mail form and remind button
        let emailPos = $(sel.emailForm).getLocation('y') + ($(sel.emailForm).getCSSProperty('height').parsed.value);
        let errorTextPosTop = $(sel.errorText).getLocation('y');
        let errorTextPosBottom = $(sel.errorText).getLocation('y') + ($(sel.errorText).getCSSProperty('font-size').parsed.value);
        let btnRemindPos = $(sel.remindBtn).getLocation('y');
        let res = (errorTextPosTop > emailPos && errorTextPosBottom < btnRemindPos);
        assert.equal(res, true);
    }

    errorTextAlign() {
        let errorTextPos = $(sel.errorText).getLocation('x') + ($(sel.errorText).getSize('width') / 2);
        assert.isTrue((browser.getWindowSize().width / 2) - errorTextPos < 4);
    }

    emailFieldOne() {
        $(sel.emailForm).setValue(this.randomString(1));
        assert.equal($(sel.emailForm).getValue().length, 1);
    }

    emailFieldMax() {
        $(sel.emailForm).setValue(this.randomString(100));
        assert.equal($(sel.emailForm).getValue().length, 100);
    }

    emailFieldMaxNegattive() {
        $(sel.emailForm).setValue(this.randomString(101));
        assert.equal($(sel.emailForm).getValue().length, 100);
    }

    inputWrongEmail() {
        $(sel.emailForm).setValue('@');
    }

    wrongEmailMsg() {
        let textError = $(sel.errorText).getText();
        assert.equal(textError, exp.errorWrong);
    }

    addChargEmail() {
        $(sel.emailForm).addValue('@');
    }

    errorTextNotDisplayed() {
        $(sel.errorText).waitForDisplayed(3000, true);
    }

    inputCorrectEmail() {
        $(sel.emailForm).setValue(exp.emailExist);
    }

    correctEmailMsgColor() {
        let textColor = $(sel.errorText).getCSSProperty('color').parsed.hex;
        assert.equal(textColor, exp.correctColor);
    }

    correctEmailMsgText() {
        let textError = $(sel.errorText).getText();
        assert.equal(textError, exp.remindMessage);
    }

    spinnerDisplayed() {
        $(sel.spinner).waitForDisplayed();
    }

    redirectPage() {
        $(homeSel.logo).waitForDisplayed(4000);
    }
}


export default new Reminder();