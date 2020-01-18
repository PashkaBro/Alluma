import loginSel from '../selectors/login-page.sel';
import sel from '../selectors/pass-reminder.page.sel';
import {assert} from 'chai';
//import Base from './base';

class Reminder  {
    
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

    randomString(max) { //you need to set value for string length
        let str = '';
        for (let i = 1; i <= max; i++) {
            str += String.fromCharCode(Math.random() * (126 - 35) + 35);
        }
        return str;
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
        assert.equal(textError, 'User with this email does not exist');
    }

    addChargEmail() {
        $(sel.emailForm).addValue('@');
    }

    errorTextNotDisplayed() {
        assert.equal($(sel.errorText).isDisplayed(), false);
    }

    inputCorrectEmail() {
        $(sel.emailForm).setValue('Alik@mail.ru');
    }

    correctEmailMsgColor() {
        let textColor = $(sel.errorText).getCSSProperty('color')['parsed']['hex'];
        assert.equal(textColor, '#008000');
    }

    correctEmailMsgText() {
        let textError = $(sel.errorText).getText();
        assert.equal(textError, 'Password reminder sent');
    }

    spinnerDisplayed() {
        
        setTimeout( function() {
            if(browser.getUrl() === sel.forgot){
                assert.equal($(sel.spinner).isDisplayed(), true);
                console.log('spinner');
                }else console.log('else')
        }, 500);
    }

    redirectPage() {
        setTimeout( function() {
            console.log('got back');
            assert.equal(browser.getUrl(), sel.home);
        }, 2500);
    }
 }
 

export default new Reminder();