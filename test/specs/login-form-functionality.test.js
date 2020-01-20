import login from '../pages/login.page';

describe('Login-page', function () {

  it('Error-empty', function () {
    login.errorEmpty();
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