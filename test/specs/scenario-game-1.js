import Game1 from '../pages/scenario-game-1'

describe('game scenario 1', function () {


  it('players select', function () {
    Game1.playersSelect()
  })

  it('roles select', function () {
    Game1.rolesSelect()
  })

  it('start game', function () {
    Game1.startGame()
  })

  it('game process', function () {
    Game1.night();
  })

  it('kill game', function () {
    Game1.killGame()
  })

})