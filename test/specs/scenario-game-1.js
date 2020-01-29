import base from '../pages/header.page'

describe('Header-for-moderator', function () {

  let citizens = [4, 5, 6, 7, 8, 9, 10];
  let mafia = [1, 2, 3];
  let playersToKillAtDay = [8, 6, 1, 4, 2];
  let nightKIll = [6, 5, 4];

  function night() {
    if ($('#end-page').isDisplayed()) {
      //browser.pause(2000);
      $('#btn-logout').click();
    }
    else {
      //browser.pause(2000);
      $$('.Dropdown-control')[0].click();
      $$('.Dropdown-option')[nightKIll[0] - 1].click();
      nightKIll.shift();
      //browser.pause(2000);
      $('.btn-warning').click();
      //browser.pause(2000);
      day(1);
    }
  }
  function day(votedPlayer) {
    if ($('#end-page').isDisplayed()) {
      //browser.pause(2000);
      $('#btn-logout').click();
    }
    else if (votedPlayer !== 'undefind') {

      $('.Dropdown-control').click();
      $$('.Dropdown-option')[playersToKillAtDay[0] - 1].click();
      playersToKillAtDay.shift();
      //browser.pause(2000);
      $('.btn-warning').click();
      $('.btn-danger').click();
      //browser.pause(2000);
      $('.btn-warning').click();
      night();

    }
    else {
      $('.btn-warning').click();
      $('.btn-warning').click();
      //browser.pause(2000);
      night();
    }
  }

  it('game prestart', function () {
    base.moderLogin();
    $('#btn-game').click();

    for (let i = 0; i < $$('img').length; i++) {
      $$('img')[0].click();
    }
    $('.btn-warning').click();
    $('.btn-warning').click();
  })

  it('players select', function () {
    $$('.Dropdown-control')[0].click();
    $$('.Dropdown-option')[2].click();
    for (let i = 1; i < ($$('.Dropdown-control')).length; i++) {
      $$('.Dropdown-control')[i].click();
      $('.Dropdown-option').click();
      $('.btn-warning').click();
    }
  })

  it('start game', function () {
    $('.text-lg').waitForDisplayed();
    $('.btn-warning').click();
    $('#add_comment').waitForDisplayed();
    $('.btn-warning').click();
    $('.btn-warning').click();
  })

  it('game process', function () {
    night();
  })

 
  it('kill game', function () {
    if ($('#end-page').isDisplayed()) {
      $('#btn-logout').click();
    }
    else if ($('#btn-login').isDisplayed) {
      console.log('done');
    }
    else {
      $('#btn-continue').click();
      $$('td img')[$$('td img').length - 1].click();
      //browser.pause(1000);
    }
  })

})