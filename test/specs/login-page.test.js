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

  it('Remind-pass-algn', function () {
    login.reminderTxtDisplayed();
  })

  it('Remind-pass-size', function () {
    login.remindTxtSize();
  })

  it('Remind-pass-color', function () {
    login.remindTxtColor();
  })

  it('Remind-pass-text', function () {
    login.remindTxt();
  })

  it('Username-text-field', function () {
    login.usernameDisplayed();
  })

  it('Password-text-field', function () {
    login.passDisplayed();
  })

  it('Login-button', function () {
    login.loginButtonDisplayed();
  })

  it('Remind-Password-button', function () {
    login.reminderBtnDisplayed();
  })

  it('Username-placeholder', function () {
    login.usernamePlaceholder();
  })

  it('Pass-placeholder', function () {
    login.passPlaceholder();
  })

  it('Login-button-background', function () {
    login.loginBtnBackground();
  })

  it('Login-button-text', function () {
    login.loginBtnText();
  })

  it('Login-button-color', function () {
    login.loginBtnColor();
  })

  it('Remind-button-background', function () {
    login.remindBtnBackground();
  })

  it('Remind-button-text', function () {
    login.remindBtnText();
  })

  it('Remind-button-color', function () {
    login.remindBtnColor();
  })

  it('Username-empty', function () {
    login.errorUsernameEmpty();
  })

  it('Password-empty', function () {
    login.errorPassEmpty();
  })

  it('Error-aligned', function () {
    login.errorAlign();
  })

  it('Error-size', function () {
    login.errorSize();
  })

  it('Error-size', function () {
    login.errorSize();
  })

  it('Error-font-family', function () {
    login.errorFont();
  })

  it('Username-field-max-100-length', function () {
    login.usernameMaxField();
  })

  it('Password-field-max-100-length', function () {
    login.passMaxField();
  })

  it('Username-does-NOT-exist', function () {
    login.userNotExistDisplayed();
  })

  it('Username-does-NOT-exist-text', function () {
    login.userNotExistText();
  })

  it('Username-does-NOT-exist-color', function () {
    login.userNotExistColor();
  })

  it('Pass-is-incorrect', function () {
    login.passIncorrect();
  })

  it('Pass-is-incorrect-text', function () {
    login.passIncorrectText();
  })

  it('Username-does-NOT-exist-color', function () {
    login.passIncorrectColor();
  })

  it('Error-text-disappears-if-makes-change-in-username', function () {
    login.usernameChange();
  })

  it('Error-text-disappears-if-makes-change-in-password', function () {
    login.passChange();
  })


})