import login from '../pages/login.page';

describe('Login-page', function () {

  it('Error-empty', function () {
    login.open();
    login.errorEmpty();
  })

  it('Error-pass-empty', function () {
    login.errorPassEmpty();
  })
  
  it('Error-username-empty', function () {
    login.errorUsernameEmpty();
  })

  it('Error-aligned', function () {
    login.errorAlign();
  })

  it('Error-color', function () {
    login.errorColor();
  })

  it('Error-location', function () {
    login.errorLocated();
  })

  it('Error-font-size', function () {
    login.errorSize();
  })

  it('Error-font-family', function () {
    login.errorFont();
  })

  it('Username-field-min-length', function () {
    login.usernameMinField();
  })

  it('Password-field-min-length', function () {
    login.passMinField();
  })

  it('Username-field-max-length', function () {
    login.usernameMaxField();
  })

  it('Password-field-max-length', function () {
    login.passMaxField();
  })

  it('Username-field-over-length', function () {
    login.usernameOverField();
  })

  it('Password-field-over-length', function () {
    login.passOverField();
  })

  it('Password-field-copy-past-off', function () {
    login.copyPastOff();
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

  it('Password-is-incorrect-color', function () {
    login.passIncorrectColor();
  })

  it('Error-text-disappears-if-makes-change-in-username', function () {
    login.usernameChange();
  })

  it('Error-text-disappears-if-makes-change-in-password', function () {
    login.passChange();
  })

  it('Remind-password-opener', function () {
    login.remindBtnFunc();
  })

  it('Response-spinner', function () {
    login.responceSpiner();
  })

  it('Correct-user-and-password', function () {
    login.moderLogin();
  })

})