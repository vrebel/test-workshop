import gameLogic from '../../../../src/js/modules/gameLogic';
import gameState from '../../../../src/js/modules/gameState';

describe('isGameOver', ()=> {

    afterEach( ()=>{
        gameState.reset();
    });

    it('should return true if it is over maximum number of turns', () => {
        
        for (var i = 0; i < 10; i++) {
            gameState.incrementTurn();            
        }
        let stub = spyOn(gameState, 'getMaxTurns').and.returnValue(10);
        
        let isOver = gameLogic.isGameOver();
        
        expect(isOver).toBeTruthy();
    });

    it('should return false if it is under maximum number of turns', () => {
        
        let isOver = gameLogic.isGameOver();
        
        expect(isOver).toBeFalsy();
    });

});