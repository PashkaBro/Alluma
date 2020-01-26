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

    it('If-checked-add-visit', function(){
      playerPage.ifCheckedAddVisit();
    });

    it('If-unchecked-add-visit', function(){
      playerPage.ifUncheckedAddVisit();
    });

    it('Placeholder-First-Name-Exists', function () {
      playerPage.placeholderFirstName();
    });

    it('Placeholder-Last-Name-Exists', function () {
      playerPage.placeholderLastName(); 
    });

    it('Placeholder-Email-Exists', function () {
      playerPage.placeholderEmail();
    });

    it('Placeholder-Nickname-Exists', function () {
      playerPage.placeholderNickname();
    });

})