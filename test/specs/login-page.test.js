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

    it('Reminder-text-is-center-aligned', function () {
      login.reminderTxtAlignment();
    })

    it('Reminder-text-size', function () {
      login.reminderTxtSize();
    })

    it('Reminder-text-color', function () {
      login.reminderTxtColor();
    })

});