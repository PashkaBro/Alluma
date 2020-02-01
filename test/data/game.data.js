export default {
    game1: {
        night: '6,10,9,5,3', //1vs1 mafia vins
        day: '1,2,4,8,7',
        res: 'Я объявляю победу Мафии!'
    },

    game2: {
        night: '6,8,4,9',
        day: '1,10,9,5,7,6',// 2 mafia vins
        res: 'Я объявляю победу Мафии!'
    },

    game3: {
        night: '4,8,9,5',
        day: '10,6,7', //3 mafia vins
        res: 'Я объявляю победу Мафии!'
    },

    game4: {
        night: '5,8,6,4,7', //no kills at day mafia vins
        day: '',
        res: 'Я объявляю победу Мафии!'
    },

    game5: {
        night: '',
        day: '4,5,6,7,8,10', // no kils at night mafia vins
        res: 'Я объявляю победу Мафии!'
    },

    game6: {
        night: '4,5,6,7,9',
        day: '2,1,3', //4 cityzen wins
        res: 'Я объявляю победу Города!'
    },

    game7: {
        night: '',
        day: '1,2,3', // no kils at night citizen wins
        res: 'Я объявляю победу Города!'
    },

    game8: {
        night: '',
        day: '',
        res: 'NOT ENOUGH PLAYERS SELECTED TO DYE FOR RUN GAME'
    }
}