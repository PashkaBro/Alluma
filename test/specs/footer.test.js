import footer from '../pages/footer.page';

describe('Footer', function () {

    it('Footer-is-displayed', () =>  {
      footer.openBase();
      footer.footerIsDisplayed();   
    })

    it('Footer-include-lower-upper-footer', () =>  {
      footer.bothFootersExist();
    })

    it('Footer-table-include-3-columns', () => {
      footer.tableColumns();
    })

    it('Footer-column1-name', () => {
      footer.column1Name();
    })

    it('Footer-column2-name', () => {
      footer.column2Name();  
    })

    it('Footer-column3-name"', () => {
      footer.column3Name();
    })

    it('Link1-text"', () => {
      footer.link1Text();
    })

    it('Link2-text"', () => {
      footer.link2Text();
    })

    it('Column2-has-phone-number-email-link-fax', () => {
      footer.column2Data();
    })

    it('Phone-number-text', () => {
      footer.phoneText();
    })

    it('Email-link-text', () => {
      footer.emailText();
    })

    it('Fax-text', () => {
      footer.faxText();
    })

    it('Column3-has-3-links', () => {
      footer.column3links();
    })

    it('Lower-footer-include-items', () => {
      footer.lowerFooterData();    
    })

    it('Copyright-text', () => {
      footer.copyrightText();  
    })

    it('Email-link-redirect', () => {
      footer.emailRedirect();  
    })

    it('Facebook-link-redirect', () => {
      footer.facebookRedirect();  
    })

    it('Twitter-link-redirect', () => {
      footer.twitterRedirect();    
    })

    it('Linkedin-link-redirect', () => {
      footer.linkedinRedirect();    
    })

    it('Logo-redirect', () => {
      footer.logoRedirect();
    })

    it('Link-in-copyright-redirect', () => {
      footer.copyrightRedirect();
    })

})