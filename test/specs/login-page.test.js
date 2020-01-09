import login from '../pages/login.page';

describe('Login-page', function () {

    it('Page-displayed', function () {
      login.open();
    })

    it('Logo-displayed', function () {
      login.logoDisplayed();
    })

    it('Form-displayed', function () {
      login.formDisplayed();
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