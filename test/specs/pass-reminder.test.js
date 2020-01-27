import remind from '../pages/pass-reminder.page'

describe('Remind-password-page', function () {

  it('Open-pass-reminder', function () {
    remind.openForgot();
  })

  it('Empty-email-field-error', function () {
    remind.clickRemindPass();
    remind.errorTextDisplayed();
  })

  it('Empty-field-error-text', function () {
    remind.errorText();
  })

  it('Error-text-between-email-and-button', function () {
    remind.errorTextLocate();
  })

  it('Error-text-align-center', function () {
    remind.errorTextAlign();
  })

  it('Email-field-accepts-1', function () {
    remind.emailFieldOne();
  })

  it('Email-field-accepts-100', function () {
    remind.emailFieldMax();
  })

  it('Email-field-not-accept-101', function () {
    remind.emailFieldMaxNegattive();
  })

  it('Email-not-exist-message-display', function () {
    remind.inputWrongEmail();
    remind.clickRemindPass();
    remind.errorTextDisplayed();
  })

  it('Email-not-exist-message-text', function () {
    remind.inputWrongEmail();
    remind.clickRemindPass();
    remind.wrongEmailMsg();
  })

  it('Email-not-exist-message-display', function () {
    remind.inputWrongEmail();
    remind.clickRemindPass();
    remind.errorTextDisplayed();
  })

  it('Email-not-exist-message-gone', function () {
    remind.addChargEmail();
    remind.errorTextNotDisplayed();
  })

  it('Correct-email-message-display', function () {
    remind.inputCorrectEmail();
    remind.clickRemindPass();
  })

  it('Correct-email-spinner-displayed', function () { // if request takes more than 0.5 sec
    remind.spinnerDisplayed();
  })

  it('Correct-email-message-color', function () {
    remind.errorTextDisplayed();
    remind.correctEmailMsgColor();
  })

  it('Correct-email-message-text', function () {
    remind.correctEmailMsgText();
  })

  it('Redirect-page', function () {
    remind.redirectPage();
  })

})