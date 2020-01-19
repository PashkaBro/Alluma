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

  it('Remind-password-aligned', function () {
    login.reminderTxtDisplayed();
  })

  it('Remind-password-size', function () {
    login.remindTxtSize();
  })

  it('Remind-password-color', function () {
    login.remindTxtColor();
  })

  it('Remind-password-text', function () {
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

  it('Password-placeholder', function () {
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

  it('Error-located', function () {
    login.errorLocated();
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

  it('Password-is-incorrect', function () {
    login.passIncorrect();
  })

  it('Password-is-incorrect-text', function () {
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