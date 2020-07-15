import forgotPassword from '../pages/forgotPassword.page';

describe('Forgot-password', function () {
  
  it('Page-contain-items', () =>  {
    forgotPassword.PageContain()
  })

  it('Password-form-title-text', () =>  {
    forgotPassword.TitleText()
  })

  it('Password-form-contain-elements', () =>  {
    forgotPassword.usernameFormContain()
  })

  it('Welcome-text', () =>  {
    forgotPassword.WelcomeText()
  })

//   it('Explenation-text', () =>  {
//     forgotPassword.explText()
//   })

  it('Username-text', () =>  {
    forgotPassword.EmailText()
  })

  it('Cancel-Button-text', () =>  {
    forgotPassword.backButtonText()
  })

  it('Continue-Button-text', () =>  {
    forgotPassword.recoverButtonText()
  })

//   it('Forgot-username-url', () =>  {
//     forgotPassword.forgotUrl()
//   })

//   it('Email-200', () =>  {
//     forgotPassword.email200()
//   })

//   it('Email-1', () =>  {
//     forgotPassword.email1()
//   })

//   it('Email-201', () =>  {
//     forgotPassword.email201()
//   })

//   it('Email-0', () =>  {
//     forgotPassword.email0()
//   })
  
//   it('Forgot-password-redirect', () =>  {
//     forgotPassword.forgotRedirect()
//   })

//   it('Back-button-redirect', () =>  {
//     forgotPassword.backBtnRedirect()
//   })

//   it('Recover-button-redirect-confirmation-text', () =>  {
//     forgotPassword.recoverBtnRedirect()
//   })

})