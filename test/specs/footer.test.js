import footer from '../pages/footer';

describe('Footer', function () {

    it('footer-is-displayed', () =>  {
      footer.openBase();
      footer.footerIsDisplayed();   
    })

    it('footer-include-lower-upper-footer', () =>  {
      footer.bothFootersExist();
    })

    it('footer-table-include-3-columns', () => {
      footer.tableColumns();
    })

    it('footer-column1-name', () => {
      footer.column1Name();
    })

    it('footer-column2-name', () => {
      footer.column2Name();  
    })

    it('footer-column3-name"', () => {
      footer.column3Name();
    })

    it('link1-text"', () => {
      footer.link1Text();
    })

    it('link2-text"', () => {
      footer.link2Text();
    })

    it('column2-has-phone-number-email-link-fax', () => {
      footer.column2Data();
    })

    it('phone-number-text', () => {
      footer.phoneText();
    })

    it('email-link-text', () => {
      footer.emailText();
    })

    it('fax-text', () => {
      footer.faxText();
    })

    it('column3-has-3-links', () => {
      footer.column3links();
    })

    it('lower-footer-include-logo-copyright-privacy-policy-non-discrimination-policy-terms-of-use', () => {
      footer.lowerFooterData();    
    })

    it('copyright-text', () => {
      footer.copyrightText();  
    })

    it('email-link-redirect', () => {
      footer.emailRedirect();  
    })

    it('facebook-link-redirect', () => {
      footer.facebookRedirect();  
    })

    it('twitter-link-redirect', () => {
      footer.twitterRedirect();    
    })

    it('linkedin-link-redirect', () => {
      footer.linkedinRedirect();    
    })

    it('logo-redirect', () => {
      footer.logoRedirect();
    })

    it('link-in-copyright-redirect', () => {
      footer.copyrightRedirect();
    })

})

     


