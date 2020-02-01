import Base from '../pages/base'
import sel from '../selectors/scenario-game.sel'
import data from '../data/game.data'
let nightKill
let dayKill
 data.game3.night.length > 0?
 nightKill = data.game3.night.split(',') : nightKill = []
 data.game3.day.lenght > 0?
 dayKill = data.game3.day.split(',') :  dayKill = []

class Game3 extends Base {
    night() {
        if ($(sel.endPage).isDisplayed()) {
            $(sel.btnLogout).click();
        }
        else if (nightKill.length !== 0) {
            $$(sel.dropdown)[0].click();
            for (let i = 0; i < $$(sel.allDropdowns).length; i++) {
                if ($$(sel.allDropdowns)[i].getText() == nightKill[0]) {
                    $$(sel.dropdownLine)[i].click();
                }
            }
            nightKill.shift();
            $(sel.yelowBtn).click();
            this.day();
        }
        else {
            $(sel.yelowBtn).click();
            this.day()
        }
    }

    day() {
        if ($(sel.endPage).isDisplayed()) {
            $(sel.btnLogout).click();
        }
        else if (dayKill.length !== 0) {
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
            this.night();

        }
        else if (dayKill.length === 0 && nightKill.length === 0) {
            console.log("NOT ENOUGH PLAYERS SELECTED TO DYE FOR RUN GAME");
        }
        else {
            $(sel.yelowBtn).click();
            $(sel.yelowBtn).click();
            this.night();
        }
    }

    playersSelect() {
        this.moderLogin();
        $(sel.btnLogout).waitForDisplayed(500)
        for (let i = 1; i < $$(sel.paidTodayIcon1).length; i++) {
            if ($$(sel.paidTodayIcon1)[i].$$(sel.paidTodayIcon2)[1] === undefined) {
                $(sel.table).$$('a')[i - 1].click()
                $(sel.checkBox).click()
                $(sel.regBtn).click()             
                $(sel.greenText).waitForDisplayed(2000)
                $(sel.btnAll).click()

            }
        }
        $('#btn-game').click();
        for (let i = 0; i < $$(sel.imgSelector).length; i++) {
            $$(sel.imgSelector)[0].click();
        }
        $(sel.yelowBtn).click();
        $(sel.yelowBtn).click();
    }

    rolesSelect() {
        $$(sel.dropdown)[0].click();
        $$(sel.dropdownLine)[2].click();
        for (let i = 1; i < ($$(sel.dropdown)).length; i++) {
            $$(sel.dropdown)[i].click();
            $(sel.dropdownLine).click();
            $(sel.yelowBtn).click();
        }
    }

    startGame() {
        $(sel.text).waitForDisplayed();
        $(sel.yelowBtn).click();
        $(sel.comentField).waitForDisplayed();
        $(sel.yelowBtn).click();
        $(sel.yelowBtn).click();
    }

    killGame() {
        if ($(sel.endPage).isDisplayed()) {
            $(sel.btnLogout).click();
            $(sel.btnLogin).isDisplayed()
            console.log('done');
        }
       
        else {
            $('#btn-continue').click();
            console.log('error');
            $$(sel.paidTodayIcon2)[$$(sel.paidTodayIcon2).length - 1].waitForDisplayed()
            $$(sel.paidTodayIcon2)[$$(sel.paidTodayIcon2).length - 1].click();
        }
    }
}
export default new Game3;