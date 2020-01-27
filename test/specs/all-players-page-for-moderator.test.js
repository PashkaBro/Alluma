import AllPlayers from '../pages/all-players-page.page';

describe('Header', function () {

    it('Names-on-all-players-page-displayed-as-links', function () {
        AllPlayers.moderLogin()
        AllPlayers.namesIsClickable();
    })

    it('links-redirect-to-each-player-page', function () {
        AllPlayers.namesEqualNames()
    })

})