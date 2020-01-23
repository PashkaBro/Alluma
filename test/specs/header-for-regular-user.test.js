import header from '../pages/header.page';

describe('Header', function () {

    it('Welcome-text-insated-of-login-button', function () {
        header.testLogin();
        header.welcomeTextInstedLoginBtn();
    })

    it('Welcome-text-text', function () {
        header.welcomeTextText();
    })

    it('Welcome-text-font-size', function () {
        header.welcomeTextFontSize();
    })

    it('Welcome-text-font-color', function () {
        header.welcomeTextFontColor();
    })

    it('Welcome-constant-text-font-weight', function () {
        header.welcomeConstantTextWeight();
    })

    it('Welcome-text-nicname-font-weight', function () {
        header.nicnameTextWeight();
    })

    it('My-Account-butotton-alignment', function () {
        header.myAccountBtnAlign();
    })

    it('My-Account-butotton-is-exist', function () {
        header.myAccountBtnIsExist();
    })

    it('My-Account-butotton-text', function () {
        header.myAccountBtnText();
    })

    it('My-Account-button-background-color', function () {
        header.allPlayerBtnBgColor();
    })

    it('My-Account-button-text-color', function () {
        header.myAccountBtnTextColor();
    })

    it('My-Account-button-font-size', function () {
        header.myAccountBtnFontSize();
    })

    it('My-Account-button-font-family', function () {
        header.myAccountBtnFont();
    })

    it('My-Account-button-redirect', function () {
        header.myAccountBtnRedirect()
    })

    it('Logout-butotton-text', function () {
        header.logoutBtnText();
    })

    it('Logout-button-background-color', function () {
        header.logoutBtnBgColor();
    })

    it('Logout-button-text-color', function () {
        header.logoutBtnTextColor();
    })

    it('Logout-button-font-size', function () {
        header.logoutBtnFontSize();
    })

    it('Logout-button-font-family', function () {
        header.logoutBtnFont();
    })

    it('Logout-button-alignment', function () {
        header.logoutBtnAlign();
    })

    it('Logout-button-redirect', function () {
        header.logoutClickRedirect()
    })
})