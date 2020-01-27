import sel from '../selectors/all-players-page.sel';
import exp from '../expected/all-players-page.exp';
import { assert } from 'chai';
import Base from './base';

class AllPlayers extends Base {

    namesIsClickable() {
       
        for (let i = 0; i< $$(sel.nameIsLink).length; i++){
        $$(sel.nameIsLink)[i].isDisplayed;
        $$(sel.nameIsLink)[i].isClickable();
    }
}

    namesEqualNames() {

        let resFaild = 0;
        for (let i = 0; i< $$(sel.nameIsLink).length; i++){
        let name = $$(sel.nameIsLink)[i].getText();
        $$(sel.nameIsLink)[i].click();
        name === $(sel.firstName).getAttribute('value') + ' ' + $(sel.lastName).getAttribute('value')?
        true : resFaild = false;
        this.allPlayersBtnClick();
        } 
        assert.equal(resFaild, 0);
    }
}
export default new AllPlayers();