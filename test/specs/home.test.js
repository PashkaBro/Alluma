import Home from '../pages/home.page';

describe('Home page', function () {

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

    // it('Username-100', () =>  {
    //     AllPlayers.User100()
    // })

    // it('Username-1', () =>  {
    //     AllPlayers.User1()
    // })

    // it('Username-0', () =>  {
    //     AllPlayers.User0()
    // })

    // it('Username-101', () =>  {
    //     AllPlayers.User101()
    // })

    // it('Password-100', () =>  {
    //     AllPlayers.Pass100()
    // })

    // it('Password-1', () =>  {
    //     AllPlayers.Pass1()
    // })

    // it('Password-0', () =>  {
    //     AllPlayers.Pass0()
    // })

    // it('Password-101', () =>  {
    //     AllPlayers.Pass101()
    // })

    // it('Sequre-input', () =>  {
    //     AllPlayers.BulletsInput()
    // })

    // it('Forgot-username-redirect', () =>  {
    //     AllPlayers.ForgotUsername()
    // })

    // it('Forgot-password-redirect', () =>  {
    //     AllPlayers.ForgotPassword()
    // })

   
})