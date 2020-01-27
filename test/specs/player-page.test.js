import login from '../pages/login.page';
import allPlayersPage from './../pages/all-players.page';
import playerPage from '../pages/player.page';

describe('Player-page', function () {
  describe('Paid-today', () => {
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
  })
    
  describe('Input-fields', () => {
    it('Page-displayed', function () {
      allPlayersPage.openPage();
      allPlayersPage.goToPlayerPage(0);
    });

    it('Error-Msg-appears-for-empty-first-name', function() {
      playerPage.emptyFirstNameUpdateError()
    }); 

    it('Error-Msg-appears-for-empty-last-name', function() {
      playerPage.emptyLastNameUpdateError()
    });

    it('Error-Msg-appears-for-empty-email', function() {
      playerPage.emptyEmailUpdateError()
    }); 

    it('Error-Msg-appears-for-empty-nickname', function() {
      playerPage.emptyNicknameUpdateError()
    }); 
  })

})