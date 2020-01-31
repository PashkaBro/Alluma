import base from '../pages/header.page'
import sel from '../selectors/scenario-game.sel'
import data from '../data/scenario-game-data/scenario-game.data'

describe('game scenario 1', function () {
let nightKill = [1, 10, 9, 5, 7, 8, 4];
let dayKill = [6];

  function night() {
    if ($(sel.endPage).isDisplayed()) {
      $(sel.btnLogout).click();
    }
      else if (nightKIll.length !== 0) {
        $$(sel.dropdown)[0].click();
          for (let i = 0; i < $$(sel.allDropdowns).length; i++) {
            if ($$(sel.allDropdowns)[i].getText() == nightKill[0]) {
              $$(sel.dropdownLine)[i].click();
            }
          }
          nightKill.shift();
        $(sel.yelowBtn).click();
        day(1);
      }
        else {
          $(sel.yelowBtn).click();
          day(1)
        }
  }

  function day() {
    if ($(sel.endPage).isDisplayed()) {
      $(sel.btnLogout).click();
    }
      else if (playersToKillAtDay.length !== 0) {
        $$(sel.dropdown)[0].click();
        for (let i = 0; i < $$(sel.allDropdowns).length; i++) {
          if ($$(sel.allDropdowns)[i].getText() == dayKill[0]) {
            $$(sel.dropdownLine)[i].click();
          }
        }
        dayKill.shift();
        $(sel.yelowBtn).click();
        $(sel.btnDanger).click();
        $(sel.yelowBtn).click();
        night();

    }
        else if (dayKill.length === 0 && nightKill.length === 0) {
          console.log("NOT ENOUGH PLAYERS SELECTED TO DYE FOR RUN GAME");
    }
          else {
            $(sel.yelowBtn).click();
            $(sel.yelowBtn).click();
            night();
          }
  }

  it('players select', function () {
    base.moderLogin();
    $(sel.btnLogout).waitForDisplayed(500)
    for (let i = 1; i < $$(sel.paidTodayIcon1).length; i++) {
      if ($$(sel.paidTodayIcon1)[i].$$(sel.paidTodayIcon2)[1] === undefined) {
        $(sel.table).$$('a')[i - 1].click()
        $(sel.checkBox).click()
        $(sel.regBtn).click()
        $(sel.btnAll).click()
      }
    }
    $('#btn-game').click();
      for (let i = 0; i < $$(sel.imgSelector).length; i++) {
        $$(sel.imgSelector)[0].click();
      }
    $(sel.yelowBtn).click();
    $(sel.yelowBtn).click();
  })

  it('roles select', function () {
    $$(sel.dropdown)[0].click();
    $$(sel.dropdownLine)[2].click();
      for (let i = 1; i < ($$(sel.dropdown)).length; i++) {
        $$(sel.dropdown)[i].click();
        $(sel.dropdownLine).click();
        $(sel.yelowBtn).click();
      }
  })

  it('start game', function () {
    $(sel.text).waitForDisplayed();
    $(sel.yelowBtn).click();
    $(sel.comentField).waitForDisplayed();
    $(sel.yelowBtn).click();
    $(sel.yelowBtn).click();
  })

  it('game process', function () {
    night();
  })

  it('kill game', function () {
    if ($(sel.endPage).isDisplayed()) {
      browser.pause(1000)
      $(sel.btnLogout).click();
    }
      else if ($(sel.btnLogin).isDisplayed) {
        console.log('done');
      }
        else {
          $('#btn-continue').click();
          console.log('error');
          $$(sel.paidTodayIcon2)[$$(sel.paidTodayIcon2).length - 1].click();
        }
  })

})