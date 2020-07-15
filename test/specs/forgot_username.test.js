import forgotUsername from '../pages/forgotUsername.page';

describe('Forgot-username', function () {
  
  it('Page-contain-items', () =>  {
    forgotUsername.PageContain()
  })

  it('Username-form-title-text', () =>  {
    forgotUsername.TitleText()
  })

  it('Username-form-contain-elements', () =>  {
    forgotUsername.usernameFormContain()
  })

  it('Welcome-text', () =>  {
    forgotUsername.WelcomeText()
  })

  it('Email-form-contain-elements', () =>  {
    forgotUsername.FormContain()
  })

  it('Email-text', () =>  {
    forgotUsername.EmailText()
  })

  it('Back-Button-text', () =>  {
    forgotUsername.backButtonText()
  })

  it('Recover-Button-text', () =>  {
    forgotUsername.recoverButtonText()
  })

  it('Forgot-username-url', () =>  {
    forgotUsername.forgotUrl()
  })

  it('Email-200', () =>  {
    forgotUsername.email200()
  })

  it('Email-1', () =>  {
    forgotUsername.email1()
  })

  it('Email-201', () =>  {
    forgotUsername.email201()
  })

  it('Email-0', () =>  {
    forgotUsername.email0()
  })
  
  it('Forgot-password-redirect', () =>  {
    forgotUsername.forgotRedirect()
  })

  it('Back-button-redirect', () =>  {
    forgotUsername.backBtnRedirect()
  })

  it('Recover-button-redirect-confirmation-text', () =>  {
    forgotUsername.recoverBtnRedirect()
  })

})