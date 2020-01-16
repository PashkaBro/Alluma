import sel from '../selectors/header.sel';
import exp from '../expected/header.exp';
import { assert } from 'chai';
import Base from './base';

class Header extends Base{

    //header
    headerLocation() {
        let headerLoc = $(sel.header).getLocation('y');
        assert.equal(headerLoc, exp.headerLocation);
    }

    headerBgColor() {
        let bColor = $(sel.header).getCSSProperty('background-color');
        assert.equal(bColor.value, exp.headerBgColor);
    }

    headerHasTwoBtn() {
        let length = $(sel.header).$$(sel.allBtnTag).length
        assert.equal(length, exp.numberOfBtn);
    }
    //Login player btn

    loginBtnAlign() {
        let headerLeft = $(sel.header).getSize('width') / 2;
        let elem = $(sel.loginBtn).getLocation('x');
        let btnSize = $(sel.loginBtn).getSize('width') / 2;
        let btnAlign = (headerLeft - elem - btnSize) > 0;
        assert.isTrue(btnAlign)
    }

    loginBtnBgColor() {
        let elem = $(sel.loginBtn).getCSSProperty('background-color').parsed.hex;
        assert.equal(elem, exp.loginBtnBgColor);
    }

    loginBtnText() {
        let textHTML = $(sel.loginBtn).getText();
        assert.equal(textHTML, exp.loginBtnText);
    }

    loginBtnTextColor() {
        let elem = $(sel.loginBtn).getCSSProperty('color').parsed.hex;
        assert.equal(elem, exp.loginBtnTextColor);
    }

    loginBtnFontSize() {
        let fontSize = $(sel.loginBtn).getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.loginBtnFontSize);
    }

    loginBtnFont() {
        let fontSize = $(sel.loginBtn).getCSSProperty('font-family').parsed.value[2];
        assert.equal(fontSize, exp.loginBtnFont);
    }

    loginClickRedirect() {
        $(sel.loginBtn).click();
        assert.equal(browser.getUrl(), exp.baseUrl);
    }

    loginBtnNotExist() {
        let elem = $(sel.loginBtn).isExisting();
        assert.isFalse(elem);
    }
    // All Player Button

    allPlayerBtnAlign() {
        let headerCenter = $(sel.header).getSize('width') / 2;
        let elem = $(sel.allPlayerBtn).getLocation('x');
        let btnSize = $(sel.allPlayerBtn).getSize('width') / 2;
        let btnAlign = (headerCenter -  btnSize) === Math.ceil(elem);
        assert.isTrue(btnAlign)
    }

    allPlayerBtnBgColor() {
        let elem = $(sel.allPlayerBtn);
        assert.equal(elem.getCSSProperty('background-color').parsed.hex, exp.allPlayerBtnBgColor);
    }

    allPlayersBtnText() {
        let text = $(sel.allPlayerBtn).getText();
        assert.equal(text, exp.allPlayerBtnText);
    }

    allPlayersBtnTextColor() {
        let elem = $(sel.allPlayerBtn).getCSSProperty('color').parsed.hex;
        assert.equal(elem, exp.allPlayerBtnTextColor);
    }

    allPlayersBtnFontSize() {
        let fontSize = $(sel.allPlayerBtn).getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.allPlayerBtnFontSize);
    }

    allPlayersBtnFont() {
        let font = $(sel.allPlayerBtn).getCSSProperty('font-family').parsed.value[2];
        assert.equal(font, exp.allPlayerBtnFont);
    }

    allPlayersBtnRedirect() {
        $(sel.allPlayerBtn).click();
        assert.equal(browser.getUrl(), exp.redirectUrl);

    }
}

export default new Header();