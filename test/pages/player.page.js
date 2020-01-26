import Base from './base';
import sel from '../selectors/player-page.sel';
import selAllPl from '../selectors/all-players-page.sel';
import { assert } from 'chai';

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

    placeholderFirstName() {
        this.validatePlaceholderExists(sel.fieldFN);
    }

    placeholderLastName() {
        this.validatePlaceholderExists(sel.fieldLN);
    }

    placeholderEmail() {
        this.validatePlaceholderExists(sel.fieldEm);
    }

    placeholderNickname() {
        this.validatePlaceholderExists(sel.fieldN)
    }

    clickUpdateBtn() {
        $(sel.updateBtn).click();
        $(sel.infoUpdMsg).waitForDisplayed();
    }

}

export default new PlayerPage();