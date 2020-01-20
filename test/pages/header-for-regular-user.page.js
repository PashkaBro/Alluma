import sel from '../selectors/header-for-regular-user.sel';
import logBtnSel from '../selectors/header.sel';
import exp from '../expected/header-for-regular-user.exp';
import { assert } from 'chai';
import Base from './base';

class Header extends Base{

    welcomeTextIsExist(){
        $(sel.welcomeText).isDisplayed();
    }

    welcomeText(){
       let text = $(sel.welcomeText).getText();
       assert.equal(text,exp.welcomeText)
    }
}

export default new Header();