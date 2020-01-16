import sel from '../selectors/login-page.sel.js'


class Fun {

    random(a) {
        let arr = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-=_+[]\{}|;:<>?,./qweq';
        let rand = '';
        for (let i = 0; i < a; i++) {
            rand += arr.split('')[Math.round(Math.random() * 80)];
        }
        return rand
    }

    loginReg(){
        let username = 'test';
        let pas = 'test@1234';
        $(sel.email).setValue(username);
        $(sel.pass).setValue(pas);
        $(sel.btnLogin).click();
    }

    loginModer(){
        let username = 'moderator';
        let pas = 'moder@1234';
        $(sel.email).setValue(username);
        $(sel.pass).setValue(pas);
        $(sel.btnLogin).click();
    }

    loginNegative(){
        let username = this.random(15);
        let pas = this.random(15);
        $(sel.email).setValue(username);
        $(sel.pass).setValue(pas);
        $(sel.btnLogin).click();
    }

}
export default new Fun()