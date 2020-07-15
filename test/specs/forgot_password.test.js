import forgotPassword from '../pages/forgotPassword.page';

describe('Forgot-password', function () {
  
  it('Page-url', () =>  {
    forgotPassword.pageUrl()
  })
  
  it('Page-contain-items', () =>  {
    forgotPassword.pageContain()
  })

  it('Password-form-title-text', () =>  {
    forgotPassword.titleText()
  })

  it('Password-form-contain-elements', () =>  {
    forgotPassword.passwordFormContain()
  })

  it('Welcome-text', () =>  {
    forgotPassword.welcomeText()
  })

  it('Username-form-contain-elements', () =>  {
    forgotPassword.usernameFormContain()
  })

  it('Explenation-text', () =>  {
    forgotPassword.explText()
  })

  it('Forgot-username-url', () =>  {
    forgotPassword.forgotUrl()
  })

  it('Username-text', () =>  {
    forgotPassword.usernameText()
  })

  it('Cancel-button-text', () =>  {
    forgotPassword.cancelButtonText()
  })

  it('Continue-button-text', () =>  {
    forgotPassword.continueButtonText()
  })

  it('Username-100', () =>  {
    forgotPassword.username100()
  })

  it('Username-1', () =>  {
    forgotPassword.username1()
  })

  it('Username-101', () =>  {
    forgotPassword.username101()
  })

  it('Username-0', () =>  {
    forgotPassword.username0()
  })
  
  it('Forgot-Username-redirect', () =>  {
    forgotPassword.forgotRedirect()
  })

  it('Cancel-button-redirect', () =>  {
    forgotPassword.cancelBtnRedirect()
  })

  it('Confirmation-form-contain-elements', () =>  {
    forgotPassword.confFormContain()
  })

  it('Confirmation-text', () =>  {
    forgotPassword.confText()
  })

  it('Confirmation-explenation-text', () =>  {
    forgotPassword.confExplText()
  })

  it('Resent-url-text', () =>  {
    forgotPassword.resendUrlText()
  })

  it('Back-button-text', () =>  {
    forgotPassword.backButtonText()
  })

it('Back-button-redirect', () =>  {
    forgotPassword.backBtnRedirect()
  })

})