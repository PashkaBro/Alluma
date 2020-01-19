import loginSel from '../selectors/login-page.sel';
import sel from '../selectors/pass-reminder.page.sel';
import exp from '../expected/pass-reminder.exp';
import { assert } from 'chai';
import Base from './base';

class Reminder extends Base{

    goToPage() {
        $(loginSel.btnReminder).click();
    }

    clickRemindPass() {
        $(sel.remindBtn).click();
    }

    errorTextDisplayed() {
        $(sel.errorText).isDisplayed();
    }

    errorTextColor() {
        let textColor = $(sel.errorText).getCSSProperty('color')['parsed']['hex'];
        assert.equal(textColor, exp.errorColor);
    }

    errorText() {
        let textError = $(sel.errorText).getText();
        assert.equal(textError, exp.errorEmpty);
    }

    errorTextLocate() {          //Error message should be located between e-mail form and remind button
        let emailPos = $(sel.emailForm).getLocation('y') + ($(sel.emailForm).getCSSProperty('height')['parsed']['value'] / 2);
        let errorTextPos = $(sel.errorText).getLocation('y') + ($(sel.errorText).getCSSProperty('font-size')['parsed']['value'] / 2);
        let btnRemindPos = $(sel.remindBtn).getLocation('y') + ($(sel.remindBtn).getCSSProperty('height')['parsed']['value'] / 2);
        let res = (errorTextPos > emailPos && errorTextPos < btnRemindPos);
        assert.equal(res, true);
    }

    errorTextAlign() {
        let errorTextPos = $(sel.errorText).getLocation('x') + ($(sel.errorText).getSize('width') / 2);
        assert.equal(browser.getWindowSize()['width'] / 2, Math.ceil(errorTextPos) + 8)
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
        assert.equal($(sel.errorText).isDisplayed(), false);
    }

    inputCorrectEmail() {
        $(sel.emailForm).setValue(exp.emailExist);
    }

    correctEmailMsgColor() {
        let textColor = $(sel.errorText).getCSSProperty('color')['parsed']['hex'];
        assert.equal(textColor, exp.correctColor);
    }

    correctEmailMsgText() {
        let textError = $(sel.errorText).getText();
        assert.equal(textError, exp.remindMessage);
    }

    spinnerDisplayed() {

        setTimeout(function () {
            if (browser.getUrl() === sel.forgot) {
                assert.equal($(sel.spinner).isDisplayed(), true);
            }
        }, 500);
    }

    redirectPage() {
        setTimeout(function () {
            assert.equal(browser.getUrl(), exp.homeUrl);
        }, 2500);
    }
}


export default new Reminder();