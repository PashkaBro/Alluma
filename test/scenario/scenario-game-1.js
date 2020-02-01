import Base from '../pages/base'
import sel from '../selectors/scenario-game.sel'
import data from '../data/game.data'
let nightKill
let dayKill

 

class Game1 extends Base {

    game(g){


    g.night.length > 0?
    nightKill = g.night.split(',') : nightKill = [];
    g.day.length > 0?
    dayKill = g.day.split(',') :  dayKill = [];
    }

    night() {
        if ($(sel.endPage).isDisplayed()) {
            this.killGame();
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
            this.killGame();
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

    playersSelect(g) {
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
            browser.pause(1000)
            $(sel.btnLogout).click();
            
            $(sel.btnLogin).isDisplayed()
            return(console.log('done'));
        }
       
        else if($('#btn-continue').isDisplayed()) {
            $('#btn-continue').click();
            console.log('error');
            $('.hover-item').waitForDisplayed()
            $$(sel.paidTodayIcon2)[$$(sel.paidTodayIcon2).length - 1].click();
        }
    }
}
export default new Game1;