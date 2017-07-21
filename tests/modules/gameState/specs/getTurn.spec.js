import gameState from '../../../../src/js/modules/gameState';

describe('getTurn', ()=> {

    afterEach( ()=>{
        gameState.reset();
    });

    it('should be 0 when there is no turn', () => {
        
        let turn = gameState.getTurn();

        expect(turn).toEqual(0);
    });

    it('should be 4 after 4 turns', () =>{
        for (var i = 0; i < 4; i++) {
            gameState.incrementTurn();
        }
        let turn = gameState.getTurn();

        expect(turn).toEqual(4);
    });

});