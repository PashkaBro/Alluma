import loginSel from '../selectors/login-page.sel';
import sel from '../selectors/pass-reminder.page.sel';
import {assert} from 'chai';


class Reminder {
    
    goToPage(){
        $(loginSel.forgotBtn).click();
       // browser.pause(5000);
    }

    clickRemindPass() {
        $(sel.remindBtn).click();
    }

    errorTextDisplayed() {
        $(sel.errorText).isDisplayed();
    }

    errorTextColor() {
        let textColor = $(sel.errorText).getCSSProperty('color')['parsed']['hex'];
        assert.equal(textColor, '#ff0000');
    }

    errorText() {
        let textError = $(sel.errorText).getText();
        assert.equal(textError, 'Please specify email');
    }

    errorTextLocate() {          //Error message should be located between e-mail form and remind button
        let emailPos = $(sel.emailForm).getLocation('y') + ($(sel.emailForm).getCSSProperty('height')['parsed']['value'] / 2);
        let errorTextPos = $(sel.errorText).getLocation('y') + ($(sel.errorText).getCSSProperty('font-size')['parsed']['value'] / 2);
        let btnRemindPos = $(sel.remindBtn).getLocation('y') + ($(sel.remindBtn).getCSSProperty('height')['parsed']['value'] / 2);
        let res =  (errorTextPos > emailPos && errorTextPos < btnRemindPos);
        assert.equal(res, true);
    }

    errorTextAlign() {
        let errorTextPos = $(sel.errorText).getLocation('x') + ($(sel.errorText).getSize('width') / 2);
        assert.equal(browser.getWindowSize()['width'] / 2, Math.ceil(errorTextPos) + 8)
    }
 }

export default new Reminder();