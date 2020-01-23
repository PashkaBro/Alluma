import login from '../pages/login.page';
import allPlayersPage from './../pages/all-players.page';
import playerPage from '../pages/player.page';

describe('Player-page', function () {

    it('Page-displayed', function () {
      allPlayersPage.openPage();
      allPlayersPage.goToPlayerPage(0);
    });

    it('Paid-today-checkbox-is-displayed', function () {
       playerPage.paidTodayChkb();
    });

    it('Paid-today-checkbox-can-be-checked', function () {
       playerPage.paidTodayCanBeChecked();
    });

    // it('', function () {
    //   login.open();
    // });
})
