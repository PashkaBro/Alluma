import Base from './base';
import sel from '../selectors/player-page.sel';
import { assert } from 'chai';
import playerExp from '../expected/player-page.exp';

class PlayerPage extends Base {

    paidTodayChkb() {
        $(sel.checkboxPt).isDisplayed();
    }

    paidTodayCanBeChecked() {
        $(sel.checkboxPt).isClickable();
    }

    checkPTCheckboxIfUnchecked() {
        if (!$(sel.checkboxPt).isSelected()) {
            $(sel.checkboxPt).click();
        }
    }

    uncheckPTCheckboxIfChecked() {
        if ($(sel.checkboxPt).isSelected()) {
            $(sel.checkboxPt).click();
        }
    }

    ifCheckedAddVisit() {
        this.uncheckPTCheckboxIfChecked();
        const visitsOld = $(sel.fieldVisits).getValue();
        const expectedVisits = 1 + parseInt(visitsOld);
        $(sel.checkboxPt).click();
        const visits = $(sel.fieldVisits).getValue();
        assert.equal(parseInt(visits), expectedVisits); 
    }

    ifUncheckedAddVisit() {
        this.checkPTCheckboxIfUnchecked();
        const visitsOld = $(sel.fieldVisits).getValue();
        const expectedVisits = parseInt(visitsOld) - 1;
        $(sel.checkboxPt).click();
        const visits = $(sel.fieldVisits).getValue();
        assert.equal(parseInt(visits), expectedVisits); 
    }

    clickUpdateBtn() {
        $(sel.updateBtn).click();
        $(sel.infoUpdMsg).waitForDisplayed();
    }

    clickUpdateBtnAndError() {
        $(sel.updateBtn).click();
        $(sel.errorMsg).waitForDisplayed();
        const erMsgText = $(sel.errorMsg).getText();
        assert.equal(erMsgText, playerExp.errorMessText);
    }

    emptyFirstNameUpdateError() {
        this.clearInputField(sel.fieldFN);
        $(sel.fieldLN).setValue(playerExp.lastName);
        $(sel.fieldEm).setValue(playerExp.email);
        $(sel.fieldN).setValue(playerExp.nick); 
        this.clickUpdateBtnAndError();
    }

    emptyLastNameUpdateError() {
        $(sel.fieldFN).setValue(playerExp.firstName);
        this.clearInputField(sel.fieldLN);
        $(sel.fieldEm).setValue(playerExp.email);
        $(sel.fieldN).setValue(playerExp.nick); 
        this.clickUpdateBtnAndError();
    }

    emptyEmailUpdateError() {
        $(sel.fieldFN).setValue(playerExp.firstName);
        $(sel.fieldLN).setValue(playerExp.lastName);
        this.clearInputField(sel.fieldEm);
        $(sel.fieldN).setValue(playerExp.nick); 
        this.clickUpdateBtnAndError();
    }

    emptyNicknameUpdateError() {
        $(sel.fieldFN).setValue(playerExp.firstName);
        $(sel.fieldLN).setValue(playerExp.lastName);
        $(sel.fieldEm).setValue(playerExp.email);
        this.clearInputField(sel.fieldN);
        this.clickUpdateBtnAndError();
    }

}

export default new PlayerPage();