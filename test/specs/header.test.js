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

    it('Login-batotton-text', function () {
      header.loginBtnText();
    })

    it('Reminder-text-displayed', function () {
      login.reminderTxtDisplayed();
    })

    it('Logo-is-center-aligned', function () {
      login.logoAlignment();
    })

    it('Logo-height', function () {
      login.logoHeight();
    })

});