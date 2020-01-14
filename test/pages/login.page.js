import sel from '../selectors/login-page.sel';
import exp from '../expected/login.exp';
import {assert} from 'chai';

class Login {
    
    open(){
        browser.url('/');
        $(sel.logo).waitForDisplayed();
    }

    logoDisplayed(){
        $(sel.logo).isDisplayed();
    }

    formDisplayed(){
        $(sel.form).isDisplayed();
    }

    reminderTxtDisplayed(){
        $(sel.reminderTxt).isDisplayed();
    }

    logoAlignment(){
        let textAlign = $(sel.logo).getCSSProperty('text-align');
        assert.equal(textAlign.value, exp.logoAlign);
    }

    logoHeight(){
        let height = $(sel.logo).getCSSProperty('height');
        assert.equal(height.value, exp.logoHeight);
    }

}

export default new Login();