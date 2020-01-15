import sel from '../selectors/header.sel';
import exp from '../expected/header.exp';
import {assert} from 'chai';

class header{

        //header
    headerLocation(){
       let headerLoc = $(sel.header).getLocation('y');
        assert.equal(headerLoc, exp.headerLocation);
    }

    headerBgColor(){
        let bColor = $(sel.header).getCSSProperty('background-color');
        assert.equal(bColor.value, exp.headerBgColor);
    }
        //all player btn

    loginBtnAlign(){
        let headerLeft = $(se.header).getSize('width') / 2;
        let elem = $(sel.loginBtn).getLocation('x');
        let btnAlign = (headerLeft - elem) > 0;
        assert.isTrue(btnAlign)
    }

    loginBtnBgColor(){
        let elem = $(sel.loginBtn).getCSSProperty('background-color').parsed.hex;
        assert.equal(elem, exp.loginBtnBgColor);
    }

    loginBtnText(){
        let textHTML = $(sel.loginBtn).getHTML(false);
        assert.equal(textHTML, exp.loginBtnText);
    }

    loginBtnTextColor(){
        let elem = $(sel.loginBtn).getCSSProperty('color').parsed.hex;
        assert.equal(elem, exp.loginBtnTextColor);
    }

    loginBtnFontSize(){
        let fontSize = $(sel.loginBtn).getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.loginBtnFontSize);
    }

    loginBtnFont(){
        let fontSize = $(sel.loginBtn).getCSSProperty('font-family').parsed.string;
        assert.equal(fontSize.split(', ')[2], exp.loginBtnFont);
    }

    loginBtnNotExist(){
        let elem = $(sel.loginBtn).isExisting()
        assert.isFalse(elem);
    }

    allPlayerBtnAlign(){
        let elem = $(sel.allPlayerBtn).getCSSProperty('text-align');
        assert.equal(elem.value, exp.allPlayerBtnAlign);
}

    allPlayerBtnBgColor(){
        let elem = $(sel.allPlayerBtn);
        assert.equal(elem.getCSSProperty('background-color').parsed.hex, exp.allPlayerBtnBgColor);
    }

    allPlayersBtnText(){
        let text = $(sel.allPlayerBtn).getHTML(false);
        assert.equal(text, exp.allPlayerBtnText);
    }

    allPlayersBtnTextColor(){
        let elem = $(sel.allPlayerBtn).getCSSProperty('color').parsed.hex;
        assert.equal(elem, exp.allPlayerBtnTextColor);
    }

    allPlayersBtnFontSize(){
        let fontSize = $(sel.allPlayerBtn).getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.allPlayerBtnFontSize);
    }

    allPlayersBtnFont(){
        let font = $(sel.allPlayerBtn).getCSSProperty('font-family').parsed.string;
        assert.equal(font.split(', ')[2], exp.allPlayerBtnFont);
    }

    allPlayersBtnRedirect() {
        $(sel.allPlayerBtn).click();
        assert.equal(browser.getUrl(), exp.redirectUrl);

    }
}

export default new Header();