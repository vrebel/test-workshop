import gameState from '../../../../src/js/modules/gameState';

describe('incrementTurn', ()=> {

    afterEach( ()=>{
        gameState.reset();
    });

    it('should increment turn by 1', () => {
        let turn = gameState.getTurn();
        gameState.incrementTurn();
        let newTurn = gameState.getTurn();

        expect(newTurn).toEqual(turn + 1);
    });

});