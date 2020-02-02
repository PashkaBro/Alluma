import Base from '../pages/base';
import sel from '../selectors/scenario-game.sel';
import data from '../data/game.data';
import { assert } from 'chai';
import axios from 'axios';

let nightKill
let dayKill
let res
let resp;
let id = []
let user = data.user


class Game1 extends Base {

    game(g) {
        g.night.length > 0 ?
            nightKill = g.night.split(',') : nightKill = [];
        g.day.length > 0 ?
            dayKill = g.day.split(',') : dayKill = [];
        res = g.res
    }

    night() {
        if ($(sel.endPage).isDisplayed()) {

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
            res = "NOT ENOUGH PLAYERS SELECTED TO DYE FOR RUN GAME"
        }
        else {
            $(sel.yelowBtn).click();
            $(sel.yelowBtn).click();
            this.night();
        }
    }

    playersSelectApi(g) {
        this.moderLogin();
        $(sel.btnLogout).waitForDisplayed(500)
        $('#btn-game').click();
        $('#search').setValue("Hello")
        for (let i = 0; i < $$(sel.imgSelector).length; i++) {
            $(sel.yelowBtn).waitForDisplayed()
            $$(sel.imgSelector)[0].click();
        }
        $(sel.yelowBtn).click();
        $(sel.yelowBtn).click();
    }

    playersSelectExistingUsers(g) {
        this.moderLogin();
        $(sel.btnLogout).waitForDisplayed(500)
        for (let i = 1; i < $$(sel.paidTodayIcon1).length; i++) {
            if ($$(sel.paidTodayIcon1)[i].$$(sel.paidTodayIcon2)[1] === undefined) {
                $(sel.table).$$('a')[i - 1].click()
                $(sel.checkBox).click()
                $(sel.regBtn).click()
                $(sel.greenText).waitForDisplayed(4000)
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
            assert.equal($(sel.endPage + ' div').getText(), res);
            $(sel.btnLogout).click();
            $(sel.btnLogin).isDisplayed()
            return 'nothing to return'
        }

        else if ($('#btn-continue').isDisplayed()) {
            $('#btn-continue').click();
            console.log('error');
            $('.hover-item').waitForDisplayed()
            $$(sel.paidTodayIcon2)[$$(sel.paidTodayIcon2).length - 1].click();
        }
    }

    ApiPost() {
        for (let i = 0; i < 10; i++) {

            user.email = this.randomString(6) + 'gmail.com';
            user.nickName = 'hellow' + this.randomString(4);
            user.firstName = 'helloW' + this.randomString(3);
            browser.call(() => {
                return axios.post('https://mafia-sacramento-server-qa.herokuapp.com' + '/mafia-users', user)
                    .then(function (response) {
                        resp = response.data;
                        id.push(resp.user._id);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
        }

    }

    ApiDelete() {
        for (let i = 0; i < id.length; i++) {
            browser.call(() => {
                return axios.delete('https://mafia-sacramento-server-qa.herokuapp.com' + '/mafia-users/' + id[i])
                    .then(function (response) {
                        resp = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
        }
    }




    ///////////////////////////////////////

    pdel() {
        this.moderLogin();
        $(sel.btnLogout).waitForDisplayed(500)
        for (let i = 0; i < 30; i++) {
            $(sel.btnAll).click();
            $('#search').setValue("Hello")
            $$('.table td a')[0].click()

            $('.hover-item').click();
            $(sel.greenText).waitForDisplayed()
        }
    }
    ////////////////////////////////////////
}

export default new Game1;