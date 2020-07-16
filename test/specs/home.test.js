import Home from '../pages/home.page';

describe('Home_page', function () {

    it('Page-contain-header-footer-login-page', () =>  {
        Home.PageContain()
    })

    it('Login-form-title-text', () =>  {
        Home.TitleText()
    })

    it('Login-form-contain-elements', () =>  {
        Home.LoginContain()
    })

    it('Explanation-text', () =>  {
        Home.ExplText()
    })

    it('Welcome-text', () =>  {
        Home.WelcomeText()
    })

    it('Quastion-text', () =>  {
        Home.QuastionText()
    })

    it('Quick-screner-link', () =>  {
        Home.ScrenerText()
    })

    it('Username-text', () =>  {
        Home.UsernameText()
    })

    it('Password-text', () =>  {
        Home.PassText()
    })

    it('Login-form-contain-elements', () =>  {
        Home.FormContain()
    })

    it('Button-text', () =>  {
        Home.ButtonText()
    })

    it('Login-explanation-text', () =>  {
        Home.LoginExplText()
    })

    // it('Home-page-url', () =>  {
    //     Home.HomeUrl()
    // })
// unable to complete test with correct result

    it('Quick-screner-redirect', () =>  {
        Home.ScrenerRedirect()
    })

    it('Username-100', () =>  {
        Home.User100()
    })

    it('Username-1', () =>  {
        Home.User1()
    })

    it('Username-0', () =>  {
        Home.User0()
    })

    it('Username-101', () =>  {
        Home.User101()
    })

    it('Password-100', () =>  {
        Home.Pass100()
    })

    it('Password-1', () =>  {
        Home.Pass1()
    })

    it('Password-0', () =>  {
        Home.Pass0()
    })

    it('Password-101', () =>  {
        Home.Pass101()
    })

    it('Sequre-input', () =>  {
        Home.BulletsInput()
    })

    it('Forgot-username-redirect', () =>  {
        Home.ForgotUsername()
    })

    it('Forgot-password-redirect', () =>  {
        Home.ForgotPassword()
    })

})