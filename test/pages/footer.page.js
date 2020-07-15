import { assert } from 'chai';
import Base from './base';
import sel from '../selectors/footer.sel';
import exp from '../expected/footer.exp';

class Footer extends Base {


      footerIsDisplayed(){
        $(sel.footer).isDisplayed();   
      }

      bothFootersExist(){
        assert.isTrue( $(sel.upperFooter).isDisplayed()===$(sel.lowerFooter).isDisplayed())
      }

      tableColumns(){
        const columns = $$(sel.footerTable).length;
        assert.equal(columns, '3');
      }

      column1Name(){
        let column1 = $(sel.column1).getText();
        assert.equal(column1, exp.column1Text);
      }

      column2Name(){
        let column2 = $(sel.column2).getText();
        assert.equal(column2, exp.column2Text);
      }

      column3Name(){
        let column3 = $(sel.column3).getText();
        assert.equal(column3, exp.column3Text);
      }

      link1Text(){
        let text = $(sel.column1Link1).getText();
        assert.equal(text, exp.link1);
      }

      link2Text(){
        let text = $(sel.column1Link2).getText();
        assert.equal(text, exp.link2);
      }

      column2Data(){
        let bool = $(sel.phone).isDisplayed() === $(sel.email).isDisplayed() === $(sel.fax).isDisplayed();
        assert.isTrue(bool);
      }

      phoneText(){
        let text = $(sel.phone).getText();
        assert.equal(text, exp.phoneNumber);
      }

      emailText(){
        let text = $(sel.email).getText();
        assert.equal(text, exp.emailText);
      }

      faxText(){
        let text = $(sel.fax).getText();
        assert.equal(text, exp.faxNumber);
      }

      column3links(){
        let links = $$(sel.column3Links).length;
        assert.equal(links, '3');
      }

      lowerFooterData(){
        let links = $$(sel.lowerFooterLinks1).length + $$(sel.lowerFooterLinks2).length;
        assert.equal(links, '5');
      }

      copyrightText(){
        let text = $(sel.copyrightText).getText() + ' ' + $(sel.copyrightlink).getText();
        assert.equal(text, exp.copyright);
      }

      emailRedirect(){
       let href = $(sel.email).getAttribute('href')
        assert.equal(href, exp.emailUrl);
      }

      facebookRedirect(){
        $$(sel.column3Links)[0].click();
        let url = browser.getUrl()
        assert.equal(url, exp.facebookUrl);
      }

      twitterRedirect(){
        this.openBase()
        $$(sel.column3Links)[1].click();
        let url = browser.getUrl()
        assert.equal(url, exp.twitterUrl);
      }

      linkedinRedirect(){
        this.openBase()
        $(sel.linkedinLinkForClick).click();
        let url = browser.getUrl().substring(0, 25) // hardcode due to no existing user for Linkedin 
        assert.equal(url, exp.linkedinUrlNonUser.substring(0, 25));
      }

      logoRedirect(){
        this.openBase()
        $$(sel.lowerFooterLinks1)[0].click();
        let url = browser.getUrl()
        assert.equal(url, exp.logoUrl);
      }

      copyrightRedirect(){
        this.openBase()
        $(sel.copyrightlink).click();
        let url = browser.getUrl()
        assert.equal(url, exp.copyrightLink);
      }

      
}

export default new Footer();