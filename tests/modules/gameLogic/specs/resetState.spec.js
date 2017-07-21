import gameState from '../../../../src/js/modules/gameState';
import gameLogic from '../../../../src/js/modules/gameLogic';

describe('resetState', ()=> {


    it('should call gameState.reset', () => {
        
        let spy = spyOn(gameState, 'reset');

        gameLogic.resetState();

        expect(spy).toHaveBeenCalled();
    });

});