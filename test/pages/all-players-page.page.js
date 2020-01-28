import sel from '../selectors/all-players-page.sel';
import exp from '../expected/all-players-page.exp';
import { assert } from 'chai';
import Base from './base';

class AllPlayers extends Base {

    namesIsClickable() {
       
        for (let i = 0; i< $$(sel.nameIsLink).length; i++){
        $$(sel.nameIsLink)[i].isDisplayed;
        $$(sel.nameIsLink)[i].isClickable();
       //console.log($$(".table tr")[1].$$('td')[7].$('img').getCSSProperty('vertical-align'))
        
    }
}

    namesEqualNames() {

        let i = Math.round(Math.random(9))
        let name = $$(sel.nameIsLink)[i].getText();
        $$(sel.nameIsLink)[i].click();
        let nameEqual = $(sel.firstName).getAttribute('value') + ' ' + $(sel.lastName).getAttribute('value');
        assert.equal(name, nameEqual);
    }
}
export default new AllPlayers();