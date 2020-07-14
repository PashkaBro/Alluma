import sel from '../selectors/header.sel';
import exp from '../expected/header.exp';
import Base from'../pages/base.js';
import { assert } from 'chai';

class Header extends Base {

    HeaderIsDisplayed() {
        let elem = $(sel.header).isExisting();
        assert.isTrue(elem);
    }

    headerTitleIsDisplayed() {
        let titleExist = $(sel.headerTitle).isDisplayed();
        assert.isTrue(titleExist);
    }

    headerTitleText() {
        let text = $(sel.headerTitle).getText();
        assert.equal(text, exp.titleText);
    }

}

    export default new Header();