import Base from './base';
import sel from './../selectors/all-players-page.sel';
import playerPageSel from './../selectors/player-page.sel';
import { assert } from 'chai';

class AllPlayersPage extends Base {

    openPage() {
        this.openBase();
        this.moderLogin();
        $(sel.playersTableHeaders).waitForDisplayed();
        assert.equal($$(sel.playersTableHeaders).length, 10);
    }

    goToPlayerPage(index = 0) {
        const rows = $$(sel.playersTableRows);
        const row = rows[index];
        row.$(sel.playersTableInner.links).click();
        $(playerPageSel.firstNameInput).waitForDisplayed();
    }
}

export default new AllPlayersPage();
