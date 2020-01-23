import login from '../pages/login.page';
import allPlayersPage from './../pages/all-players.page'

describe('Player-page', function () {

    it('Page-displayed', function () {
      allPlayersPage.openPage();
      allPlayersPage.goToPlayerPage(0);
    });

    // it('Paid-today-checked', function () {
    //   login.open();
    // });

    // it('Paid-today-unchecked', function () {
    //   login.open();
    // });

    // it('', function () {
    //   login.open();
    // });
})
