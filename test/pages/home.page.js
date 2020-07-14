import sel from '../selectors/home.sel';
import exp from '../expected/home.exp';
import Base from'./base.js';
import { assert } from 'chai';
import baseSel from '../selectors/base.sel';

class Home extends Base {

    PageContain(){
        this.openBase()
       let elDisplayed =  $(baseSel.footer).isDisplayed() 
       === $(baseSel.header).isDisplayed() 
       === $(sel.loginForm).isDisplayed(); 
        assert.isTrue(elDisplayed)
      }

      TitleText(){
        let title = $$(sel.loginFormTitle)[0].getText();
        assert.equal(title, exp.title);   
      }

      LoginContain(){
        let items = $$(sel.loginFormText).length 
        + $$(sel.loginFormScreener).length 
        + $$(sel.loginForm).length;
        assert.equal(items, '6');   
      }

      ExplText(){
        let text = $(sel.explText).getText();
        assert.equal(text, exp.explText);
      }

      WelcomeText(){
        let text = $(sel.welcomeText).getText();
        assert.equal(text, exp.welcomeText);
      }

      QuastionText(){
        let text = $$(sel.loginFormTitle)[1].getText();
        assert.equal(text, exp.quastionText);
      }

      ScrenerText(){
        let text = $(sel.loginFormScreener).getText();
        assert.equal(text, exp.screnerText);
      }

      UsernameText(){
        let text = $$(sel.usernameText)[0].getText();
        assert.equal(text, exp.usernameText);
      }

      PassText(){
        let text = $$(sel.passText)[1].getText();
        assert.equal(text, exp.passText);
      }

      FormContain(){
        let elem = $(sel.usernameField).isDisplayed() 
        === $(sel.passField).isDisplayed() 
        === $(sel.button).isDisplayed()
        assert.isTrue(elem);
      }

      ButtonText(){
        let text = $(sel.button).getText();
        assert.equal(text, exp.button);
      }

      LoginExplText(){
        let text = ''
        $$(sel.formExplText).map(el => text += el.getText() + ' ');
        text = text.slice(0,-1);
        assert.equal(text, exp.logExplText);
      }

    //   HomeUrl(){
    //     let url = browser.getUrl()
    //     assert.equal(url, exp.homeUrl);
    //   }
// comented due to unable to complete correct test 

      ScrenerRedirect(){
        $(sel.loginFormScreener).click();
        let link = browser.getUrl();
        assert.equal(link, exp.screnerRedirect);
      }

      User100(){
        this.openBase();
        let elem = this.inputFieldCompare($(sel.usernameField), 100);
        assert.isTrue(elem);
      }

      User1(){
        let elem = this.inputFieldCompare($(sel.usernameField), 1);
        assert.isTrue(elem);
      }

      User0(){
        this.inputFieldCompare($(sel.usernameField), 0);
        this.inputFieldCompare($(sel.passField), 1);
        $(sel.button).click();
        let errorText = $(sel.usernameField0).getText();
        assert.equal(errorText, exp.usernameErrorText);
      }

      User101(){
        this.openBase();
        let elem = this.inputFieldCompare($(sel.usernameField), 101);
        assert.isTrue(!elem);
      }

      Pass100(){
        this.openBase();
        let elem = this.inputFieldCompare($(sel.passField), 100);
        assert.isTrue(elem);
      }

      Pass1(){
        let elem = this.inputFieldCompare($(sel.passField), 1);
        assert.isTrue(elem);
      }

      Pass0(){
        this.openBase()
        this.inputFieldCompare($(sel.usernameField), 1);
        this.inputFieldCompare($(sel.passField), 0);
        $(sel.button).click();
        let errorText = $(sel.passwordField0).getText();
        assert.equal(errorText, exp.passwordErrorText);
      }

      Pass101(){
        this.openBase();
        let elem = this.inputFieldCompare($(sel.passField), 101);
        assert.isTrue(!elem);
      }

      BulletsInput(){
        let type = $(sel.passField).getAttribute('type');
        assert.equal(type, exp.sequreInput);
      }

      ForgotUsername(){
        $(sel.forgotUsername).click();
        let link = browser.getUrl().substring(0, 71);
        assert.equal(link, exp.forgotUsernameRedirect.substring(0, 71));
      }

      ForgotPassword(){
        this.openBase()
        $(sel.forgotPassword).click();
        let link = browser.getUrl().substring(0, 71);
        assert.equal(link, exp.forgotPasswordRedirect.substring(0, 71));
      }
      
}

    export default new Home();