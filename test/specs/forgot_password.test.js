import allPlayersPage from '../pages/all-players.page';
import playerPage from '../pages/player.page';

describe('All-players-page', function () {

    it('Pt-checkbx-is-shown', function () {
        allPlayersPage.openPage();
        allPlayersPage.goToPlayerPage(0);
        playerPage.checkPTCheckboxIfUnchecked();
        playerPage.clickUpdateBtn();
        browser.pause(1000);
        playerPage.allPlayersBtnClick();
        allPlayersPage.validatePTCheckboxForPlayer(0, true);
    });

    it('Pt-checkbx-is-not-shown', function () {
        allPlayersPage.openPage();
        allPlayersPage.goToPlayerPage(0);
        playerPage.uncheckPTCheckboxIfChecked();
        playerPage.clickUpdateBtn();
        browser.pause(1000);
        playerPage.allPlayersBtnClick();
        allPlayersPage.validatePTCheckboxForPlayer(0, false);
    });
})