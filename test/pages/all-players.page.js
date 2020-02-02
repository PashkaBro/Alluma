import Base from './base';
import sel from './../selectors/all-players-page.sel';
import playerPageSel from './../selectors/player-page.sel';
import { assert } from 'chai';

class AllPlayersPage extends Base {

    openPage() {
        this.moderLogin();
        $(sel.playersTableHeaders).waitForDisplayed();
    }

    goToPlayerPage(index = 0) {
        const rows = $$(sel.playersTableRows);
        const row = rows[index];
        row.$(sel.playersTableInner.links).click();
        $(playerPageSel.firstNameInput).waitForDisplayed();
    }

    validatePTCheckboxForPlayer(index = 0, checked = true) {
        const ptCell = $$(sel.playersTableRows)[index].$$('td')[6];
        let expectedLength; 
        if (checked) { 
            expectedLength = 1;
        } else {
            expectedLength = 0;
        }
        assert.equal(ptCell.$$('img').length, expectedLength);
    }

    namesIsClickable() {
        $$(sel.nameIsLink)[Math.round(Math.random(9))].isDisplayed();
        $$(sel.nameIsLink)[Math.round(Math.random(9))].isClickable();
    }

    namesEqualNames() {
        let i = Math.round(Math.random(9))
        let name = $$(sel.nameIsLink)[i].getText();
        $$(sel.nameIsLink)[i].click();
        let nameEqual = $(sel.firstName).getAttribute('value') + ' ' + $(sel.lastName).getAttribute('value');
        assert.equal(name, nameEqual);
    }

    ptColumnIsExist() {
        assert.equal($$(sel.tableHead).length, 10)
    }

    ptColumnText() {
        assert.equal($$(sel.tableHead)[6].getText(),'PT')
    }
}

export default new AllPlayersPage();