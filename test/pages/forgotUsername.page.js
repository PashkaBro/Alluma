import sel from '../selectors/forgotUsername.sel';
import exp from '../expected/forgotUsername.exp';
import Base from'./base.js';
import { assert } from 'chai';
import baseSel from '../selectors/base.sel';

class ForgotUsername extends Base {

    PageContain(){
        this.openForgotUsername()
       let elDisplayed =  $(baseSel.footer).isDisplayed() 
       === $(baseSel.header).isDisplayed() 
       === $(sel.usernameForm).isDisplayed(); 
        assert.isTrue(elDisplayed)
      }

      TitleText(){
        let title = $$(sel.usernameFormTitle)[0].getText();
        assert.equal(title, exp.title);   
      }

      usernameFormContain(){
        let items = $$(sel.usernameFormText).length  
        + $$(baseSel.form).length;
        assert.equal(items, '3');   
      }

      WelcomeText(){
        let text = $(sel.welcomeText).getText();
        assert.equal(text, exp.welcomeText);
      }

      FormContain(){
        let elem = $(sel.emailText).isDisplayed() 
        === $(sel.emailField).isDisplayed() 
        === $(baseSel.forgotLink).isDisplayed()
        === $(sel.bButton).isDisplayed()
        === $(sel.recButton).isDisplayed()
        assert.isTrue(elem);
      }

      EmailText(){
        let text = $$(sel.emailText)[0].getText();
        assert.equal(text, exp.emailText);
      }

      backButtonText(){
        let text = $(sel.bButton).getText();
        assert.equal(text, exp.bButton);
      }

      recoverButtonText(){
        let text = $(sel.recButton).getText();
        assert.equal(text, exp.recButton);
      }

      forgotUrl(){
        $(baseSel.forgotLink).click();
        let url = browser.getUrl().substring(0, 71);
        assert.equal(url, exp.forgotUrl.substring(0, 71));
      }

      email200(){
        this.openForgotUsername();
        let elem = this.inputFieldCompare($(sel.emailField), 200);
        assert.isTrue(elem);
      }

      email1(){
        let elem = this.inputFieldCompare($(sel.emailField), 1);
        assert.isTrue(elem);
      }

      email0(){
        this.inputFieldCompare($(sel.emailField), 0);
        $(sel.recButton).click();
        let errorText = $(sel.errorField0).getText();
        assert.equal(errorText, exp.emailErrorText);
      }

      email201(){
        this.openForgotUsername();
        let elem = this.inputFieldCompare($(sel.emailField), 201);
        assert.isTrue(!elem);
      }

      forgotRedirect(){
        this.openForgotUsername();
        $(baseSel.forgotLink).click();
        let link = browser.getUrl().substring(0, 71);
        assert.equal(link, exp.forgotPassRedirect.substring(0, 71));
      }

      backBtnRedirect(){
        this.openForgotUsername();
        $(sel.bButton).click();
        let link = browser.getUrl().substring(0, 71);
        assert.equal(link, exp.bButtonRedirect.substring(0, 71));
      }

      recoverBtnRedirect(){
        this.openForgotUsername();
        $(sel.emailField).setValue(String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65)+ '@gmail.com')
        $(sel.recButton).click();
        let link = $(sel.errorMessage).getText()
        assert.equal(link, exp.confirmationText);
      }
      
}

    export default new ForgotUsername();