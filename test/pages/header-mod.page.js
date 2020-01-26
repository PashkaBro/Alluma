import sel from '../selectors/header-for-mod.sel';
import exp from '../expected/header-for-mod.exp';
import Base from './base';
import { assert } from 'chai';

class HeaderMod extends Base{

    newPlayerBtnModerat(){
        $(sel.newBtn).isDisplayed();
    }

    newGameBtnModerat(){
        $(sel.newGameBtn).isDisplayed();
    }

    continueBtnModerat(){
        $(sel.btnContinue).isDisplayed();
    }


    newPlayertBtnRedirect() {
        $(sel.newBtn).click();
        assert.equal(browser.getUrl(), exp.redirNewPlaer);
    }

    
    newGameBtnRedirect() {
        $(sel.newGameBtn).click();
        assert.equal(browser.getUrl(), exp.redirNewGame);
       
    }

    continueBtnRedirect() {
        $(sel.btnContinue).click();
        assert.equal(browser.getUrl(), exp.redirContinue);
       
    }
}
export default new HeaderMod;