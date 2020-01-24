import Base from './base';
import sel from '../selectors/player-page.sel';
import selAllPl from '../selectors/all-players-page.sel';
import expRes from '../expected/player-page.exp';
import { assert } from 'chai';

class PlayerPage extends Base {

    paidTodayChkb() {
        $(sel.checkboxPt).isDisplayed();
    }

    paidTodayCanBeChecked() {
        $(sel.checkboxPt).isClickable();
    }

    ifCheckedAddVisit() {
        if ($(sel.checkboxPt).isSelected()) {
            $(sel.checkboxPt).click();
        }
        const visitsOld = $(sel.fieldVisits).getValue();
        const expectedVisits = 1 + parseInt(visitsOld);
        $(sel.checkboxPt).click();
        const visits = $(sel.fieldVisits).getValue();
        assert.equal(parseInt(visits), expectedVisits); 
    }

    ifUncheckedAddVisit() {
        if (!$(sel.checkboxPt).isSelected()) {
            $(sel.checkboxPt).click();
        }
        const visitsOld = $(sel.fieldVisits).getValue();
        const expectedVisits = parseInt(visitsOld) - 1;
        $(sel.checkboxPt).click();
        const visits = $(sel.fieldVisits).getValue();
        assert.equal(parseInt(visits), expectedVisits); 
    }

    placeholderFirstName() {
        this.validatePlaceholderBySelector(sel.fieldFN, expRes.placeHTextFN);
    }

    placeholderLastName() {
        this.validatePlaceholderBySelector(sel.fieldLN, expRes.placeHTextLN);
    }

    placeholderEmail() {
        this.validatePlaceholderBySelector(sel.fieldEm, expRes.placeHTextE);
    }

    placeholderNickname() {
        this.validatePlaceholderBySelector(sel.fieldN, expRes.PlaceHTextN)
    }

}

export default new PlayerPage();