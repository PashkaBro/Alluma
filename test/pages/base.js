import sel from '../selectors/base.sel'
import { assert } from 'chai';

class Base {

    openBase() {
        browser.url('/');
    }

    fieldInput(num){ //random symbol input
        let str = ''
        for (let i = 1; i<=num; i++){
            str +=  String.fromCharCode(Math.floor(Math.random() * (122 - 48 + 1)) + 48)
        }
       return str
    }

    inputFieldCompare(el, num){ // funct to check how many symb field can take
        let originValue = this.fieldInput(num)
        el.setValue(originValue);
        let currentValue = el.getValue();
        return originValue === currentValue
    }

    openForgotUsername(){
        browser.url('/');
            $(sel.forgotUsername).click();
    }

}
export default Base;
