import sel from '../selectors/forgotPassword.sel';
import exp from '../expected/forgotPassword.exp';
import Base from'./base.js';
import { assert } from 'chai';
import baseSel from '../selectors/base.sel';

class ForgotPassword extends Base {

    pageContain(){
       let elDisplayed =  $(baseSel.footer).isDisplayed() 
       === $(baseSel.header).isDisplayed() 
       === $(sel.passForm).isDisplayed(); 
        assert.isTrue(elDisplayed)
      }

      pageUrl(){
        this.openForgotPassword()
        let url = browser.getUrl().substring(0, 71);
        assert.equal(url, exp.forgotUrl.substring(0, 71));
      }

      titleText(){
        let title = $(sel.passwordFormTitle).getText();
        assert.equal(title, exp.title);   
      }

      passwordFormContain(){
        let items = $(sel.welcomeText).isDisplayed()
        === $(baseSel.form).isDisplayed()
        assert.isTrue(items)
      }

      welcomeText(){
        let text = $(sel.welcomeText).getText();
        assert.equal(text, exp.welcomeText);
      }

      usernameFormContain(){
        let elem = $(sel.forgotMsg).isDisplayed() 
        === $(sel.usernameFormText).isDisplayed() 
        === $(sel.emailField).isDisplayed()
        === $(sel.forgotLink).isDisplayed()
        === $(sel.cButton).isDisplayed()
        === $(sel.continueButton).isDisplayed()
        assert.isTrue(elem);
      }

      explText(){
        let text = $(sel.forgotMsg).getText();
        assert.equal(text, exp.explText);
      }

      forgotUrl(){
       let text =  $(sel.forgotLink).getText()
        assert.equal(text, exp.forgotUrlText);
      }

      usernameText(){
        let text = $(sel.usernameFormText).getText();
        assert.equal(text, exp.usernameFormText);
      }

      cancelButtonText(){
        let text = $(sel.cButton).getText();
        assert.equal(text, exp.cButton);
      }

      continueButtonText(){
        let text = $(sel.continueButton).getText();
        assert.equal(text, exp.continueButton);
      }
//////////////////////////
     
      username100(){
        this.openForgotPassword();
        let elem = this.inputFieldCompare($(sel.emailField), 100);
        assert.isTrue(elem);
      }

      username1(){
        let elem = this.inputFieldCompare($(sel.emailField), 1);
        assert.isTrue(elem);
      }

      username0(){
        this.inputFieldCompare($(sel.emailField), 0);
        $(sel.continueButton).click();
        let errorText = $(sel.errorField0).getText();
        assert.equal(errorText, exp.usernameErrorText);
      }

      username101(){
        this.openForgotPassword();
        let elem = this.inputFieldCompare($(sel.emailField), 101);
        assert.isTrue(!elem);
      }

      forgotRedirect(){
        this.openForgotPassword();
        $(sel.forgotLink).click();
        let link = browser.getUrl().substring(0, 71);
        assert.equal(link, exp.forgotUsernameRedirect.substring(0, 71));
      }

      cancelBtnRedirect(){
        this.openForgotPassword();
        $(sel.cButton).click();
        let link = browser.getUrl().substring(0, 71);
        assert.equal(link, exp.cButtonRedirect.substring(0, 71));
      }

      confFormContain(){
        this.openForgotPassword();
        this.inputFieldCompare($(sel.emailField), 3);
        $(sel.continueButton).click();
        let elem = $(sel.confText).isDisplayed()
        === $(sel.confExplText).isDisplayed()
        === $(sel.resendLinkText).isDisplayed()
        === $(sel.cButton).isDisplayed()
        assert.isTrue(elem);
      }

      confText(){
        let text = $(sel.confText).getText();
        assert.equal(text, exp.confText);
      }

      confExplText(){
        let text = $(sel.confExplText).getText();
        assert.equal(text, exp.confExplText);
      }

      resendUrlText(){
        let text = $(sel.resendLinkText).getText();
        assert.equal(text, exp.resendLinkText);
      }

      backButtonText(){
        let text = $(sel.cButton).getText();
        assert.equal(text, exp.backButton);
      }

      backBtnRedirect(){
        $(sel.cButton).click();
        let link = browser.getUrl().substring(0, 71)
        assert.equal(link, exp.cButtonRedirect.substring(0, 71));
      }
      
}

    export default new ForgotPassword();