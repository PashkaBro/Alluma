import header from '../pages/header.page';
import base from '../base';

describe('Header', function () {

    it('Header-displayed', function () {
      base.openForgot();
      header.headerLocation()
    })

    it('Header-beckground-color', function () {
      header.headerBgColor();
    })

    it('Login-butotton-text', function () {
      header.loginBtnText();
    })

    it('Login-button-background-color', function () {
      header.loginBtnBgColor();
    })

    it('Login-button-text-color', function () {
      header.loginBtnTextColor();
    })

    it('Login-button-font-size', function () {
      header.loginBtnFontSize();
    })

    it('Login-button-font-family', function () {
      header.loginBtnFont();
    })

    it('Login-button-redirect', function () {
      header.loginClickRedirect()
    })

    it('Login-button-not-exist', function () {
      header.loginBtnNotExist();
    })

    it('AllPlayer-butotton-text', function () {
      header.allPlayersBtnText();
    })

    it('AllPlayer-button-background-color', function () {
      header.allPlayerBtnBgColor();
    })

    it('AllPlayer-button-text-color', function () {
      header.allPlayersBtnTextColor();
    })

    it('AllPlayer-button-font-size', function () {
      header.allPlayersBtnFontSize();
    })

    it('AllPlayer-button-font-family', function () {
      header.allPlayersBtnFont();
    })

    it('AllPlayer-button-redirect', function () {
      header.allPlayersBtnRedirect()
    })

});