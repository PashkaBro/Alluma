import sel from '../selectors/remind-password.sel';
import exp from '../expected/remind-password.exp';
import { assert } from 'chai';

class ReminderPassword extends Base {

    remPageDisplayed() {
        browser.url('/forgot');
        $(sel.reminderContent).isDisplayed();
    }

    remPageAligned() {
        let containerAlign = $(sel.reminderContent).getCSSProperty('align-items');
        assert.equal(containerAlign.value, exp.alignItems);
    }

    emailFieldDisplayed() {
        $(sel.remEmailField).isDisplayed();
    }

    reminderTextDisplayed() {
        $(sel.reminderText).isDisplayed();
    }

    reminderPasswordBtn() {
        $(sel.reminderPasswordBtn).isDisplayed();
    }

    emailFieldContainsPlaceholder() {
        let placeholder = $(sel.remEmailField).getAttribute('placeholder');
        assert.equal(placeholder, exp.emailTextPlaceholder);
    }

    reminderTextAligned() {
        let leftAligned = $(sel.reminderText).getCSSProperty('text-align');
        assert.equal(leftAligned.parsed.string, exp.reninderTextAligned);
    }

    reminderTextSize() {
        let size = $(sel.reminderText).getCSSProperty('font-size');
        assert.equal(size.parsed.string, exp.reninderTextSize);
    }

    reminderTextColor() {
        let color = $(sel.reminderText).getCSSProperty('color');
        assert.equal(color.parsed.hex, exp.reminderTextColor);
    }

    reminderTextName() {
        let nameText = $(sel.reminderText).getText();
        assert.equal(nameText, exp.nameText);
    }

    reminderPasswordBtnColor() {
        let btnColor = $(sel.reminderPasswordBtn).getCSSProperty('background-color');
        assert.equal(btnColor.parsed.hex, exp.reminderPasswordBtnColor);
    }

    reminderPasswordBtnName() {
        let nameBtn = $(sel.reminderPasswordBtn).getText();
        assert.equal(nameBtn, exp.nameBtn);
    }

    reminderPasswordBtnTextColor() {
        let btnTextColor = $(sel.reminderPasswordBtn).getCSSProperty('color');
        assert.equal(btnTextColor.parsed.hex, exp.reminderPasswordBtnTextColor);
    }

    reminderPasswordBtnAlign() {
        let btnCenter = $(sel.reminderPasswordBtnAlign).getSize('width') / 2;
        let elem = $(sel.reminderPasswordBtn).getLocation('x');
        let btnSize = $(sel.reminderPasswordBtn).getSize('width') / 2;
        let diff = (btnCenter - btnSize - elem);
        assert.isTrue(diff < 1 && diff > -1);
    }

}

export default new ReminderPassword();