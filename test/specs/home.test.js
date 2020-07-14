import AllPlayers from '../pages/all-players.page';

describe('Header', function () {

    it('Names-on-all-players-page-displayed-as-links', function () {
        AllPlayers.moderLogin()
        AllPlayers.namesIsClickable();
    })

    it('links-redirect-to-each-player-page', function () {
        AllPlayers.namesEqualNames()
    })

    it('Table-has-PT-column', function () {
        AllPlayers.allPlayersBtnClick()
        AllPlayers.ptColumnIsExist()
    })

    it('Aditional-column-text-PT', function () {
        AllPlayers.ptColumnText()
    })

})