import sel from '../selectors/header.sel';
import exp from '../expected/header.exp';
import { assert } from 'chai';
import Base from './base';

class Header extends Base {

    newUserPage() {
        this.moderLogin();
        sel.newPlayerBtn().click();
        $('#registration').waitForDisplayed(3000)
    }

    userDataSetValue() {
       $('#firstName')
    }

    headerHasTwoBtn() {
        let length = $(sel.header).$$(sel.allBtnTag).length
        assert.equal(length, exp.numberOfBtn);
    }

}