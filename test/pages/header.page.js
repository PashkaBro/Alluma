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

    loginBtnKlick(){
        $('.btn-primary').click();
    }

}

export default new Header();