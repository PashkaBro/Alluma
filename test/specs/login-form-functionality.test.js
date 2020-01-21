import login from '../pages/login.page';

describe('Login-page', function () {

  it('Error-empty', function () {
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

  it('Error-location', function () {
    login.errorLocated();
  })

  it('Error-font-size', function () {
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

  it('Password-field-copy/past-off', function () {
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

  it('Correct-user-and-password', function () {
    login.loginCorrect();
  })

})