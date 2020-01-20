import sel from '../selectors/remind-password.sel';
import exp from '../expected/remind-password.exp';
import {assert} from 'chai';

class ReminderPassword {
    
    remPageDisplayed(){
        browser.url('/forgot');
      //  $ (sel.btnRemindPass).click();
        $(sel.reminderContent).isDisplayed();
    }
    
    remPageAligned(){
       // browser.url('/forgot');
        //$ (sel.btnRemindPass).click();
        let containerAlign = $(sel.reminderContent).getCSSProperty('align-items');
        assert.equal(containerAlign.value, exp.alignItems);
    }

    emailFieldDisplayed(){
        $(sel.remEmailField).isDisplayed();
    }

    reminderTextDisplayed(){
        $(sel.reminderText).isDisplayed();
    }

    reminderPasswordBtn(){
        $(sel.reminderPasswordBtn).isDisplayed();
    }
    
    emailFieldContainsPlaceholder(){
        let placeholder = $(sel.remEmailField).getAttribute('placeholder');
        //console.log(placeholder);
        assert.equal(placeholder, exp.emailTextPlaceholder);
    }

    reminderTextAligned(){
        let leftAligned = $(sel.reminderText).getCSSProperty('text-align');
        //console.log(leftAligned);
        assert.equal(leftAligned.parsed.string, exp.reninderTextAligned);
    }

    reminderTextSize(){
        let size = $(sel.reminderText).getCSSProperty('font-size');
        //console.log(size);
        assert.equal(size.parsed.string, exp.reninderTextSize);
    }

    reminderTextColor(){
        let color = $(sel.reminderText).getCSSProperty('color');
       // console.log(color);
        assert.equal(color.parsed.hex, exp.reminderTextColor);
    }

    reminderTextName(){
        let nameText = $(sel.reminderText).getText();
       // console.log(nameText);
        assert.equal(nameText, exp.nameText);        
    }

    reminderPasswordBtnColor(){
        let btnColor = $(sel.reminderPasswordBtn).getCSSProperty('background-color');
        //console.log(btnColor);
        assert.equal(btnColor.parsed.hex, exp.reminderPasswordBtnColor);
    }

    reminderPasswordBtnName(){
        let nameBtn = $(sel.reminderPasswordBtn).getText();
       // console.log(nameBtn);
        assert.equal(nameBtn, exp.nameBtn);        
    }

    reminderPasswordBtnTextColor(){
        let btnTextColor = $(sel.reminderPasswordBtn).getCSSProperty('color');
        //console.log(btnTextColor);
        assert.equal(btnTextColor.parsed.hex, exp.reminderPasswordBtnTextColor);
    }    

    reminderPasswordBtnAlign() {
        let btnCenter = $(sel.reminderPasswordBtnAlign).getSize('width') / 2;
        console.log(btnCenter);        
        let elem = $(sel.reminderPasswordBtn).getLocation('x');
        console.log(elem);
        let btnSize = $(sel.reminderPasswordBtn).getSize('width') / 2;
        console.log(btnSize);
        let btnAlign = (btnCenter-btnSize) === parseFloat(elem);  //Math.ceil(elem);
        assert.isTrue(btnAlign)
    }
    
}

export default new ReminderPassword();