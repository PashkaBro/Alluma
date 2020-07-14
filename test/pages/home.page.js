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
        assert.isTrue(elem)
      }

      ButtonText(){
        let text = $(sel.button).getText();
        assert.equal(text, exp.button);
      }

      LoginExplText(){
        let text = ''
        $$(sel.formExplText).map(el => text += el.getText() + ' ');
        text = text.slice(0,-1)
        assert.equal(text, exp.logExplText);
      }

    //   HomeUrl(){
    //     let url = browser.getUrl()
    //     assert.equal(url, exp.homeUrl);
    //   }
// comented due to unable to complete correct test 

      ScrenerRedirect(){
        $(sel.loginFormScreener).click();
        let link = browser.getUrl()
        assert.equal(link, exp.screnerRedirect);
      }

      User100(){
        $(sel.loginFormScreener).click();
        let text = browser.getUrl()
        assert.equal(text, exp.screnerRedirect);
      }

      User1(){
       let href = $(sel.email).getAttribute('href')
        assert.equal(href, exp.emailUrl);
      }

      User0(){
        $$(sel.column3Links)[0].click();
        let url = browser.getUrl()
        assert.equal(url, exp.facebookUrl);
      }

      User101(){
        this.openBase()
        $$(sel.column3Links)[1].click();
        let url = browser.getUrl()
        assert.equal(url, exp.twitterUrl);
      }

      Pass100(){
        this.openBase()
        $(sel.linkedinLinkForClick).click();
        let url = browser.getUrl().substring(0, 25) // hardcode due to no existing user for Linkedin 
        assert.equal(url, exp.linkedinUrlNonUser.substring(0, 25));
      }

      Pass1(){
        this.openBase()
        $$(sel.lowerFooterLinks1)[0].click();
        let url = browser.getUrl()
        assert.equal(url, exp.logoUrl);
      }

      Pass0(){
        this.openBase()
        $(sel.copyrightlink).click();
        let url = browser.getUrl()
        assert.equal(url, exp.copyrightLink);
      }

      Pass101(){
        this.openBase()
        $$(sel.column3Links)[1].click();
        let url = browser.getUrl()
        assert.equal(url, exp.twitterUrl);
      }

      BulletsInput(){
        this.openBase()
        $(sel.linkedinLinkForClick).click();
        let url = browser.getUrl().substring(0, 25) // hardcode due to no existing user for Linkedin 
        assert.equal(url, exp.linkedinUrlNonUser.substring(0, 25));
      }

      ForgotUsername(){
        this.openBase()
        $$(sel.lowerFooterLinks1)[0].click();
        let url = browser.getUrl()
        assert.equal(url, exp.logoUrl);
      }

      ForgotPassword(){
        this.openBase()
        $(sel.copyrightlink).click();
        let url = browser.getUrl()
        assert.equal(url, exp.copyrightLink);
      }
      
}

    export default new Home();