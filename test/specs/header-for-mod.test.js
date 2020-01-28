import headerModPage from '../pages/header-mod.page';


describe('Header-for-moderator', function () {

    it('Moder-login', function () {
      headerModPage.moderLogin();
    })

    it('New-player-btn-moderator', function () {
      headerModPage.newPlayerBtnModerat();
    })

    it('New-game-btn-moderator', function () {
       headerModPage.newGameBtnModerat();
    })

    it('Continue-game-btn-moderator', function () {
      headerModPage.continueBtnModerat();
    })

    it('Redirects-to-New-Player-page', function () {
      headerModPage.newPlayertBtnRedirect();
    })

    it('Redirects-to-New-Game-page', function () {
      headerModPage.newGameBtnRedirect();
    })

    it('Redirects-to-Continue-Game-page', function () {
      headerModPage.continueBtnRedirect();
    })
    
})