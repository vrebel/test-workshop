import {setCorrectAnswer} from '../../../src/js/modules/gameLogic';
import gameState from '../../../src/js/modules/gameState';

describe('setCorrectAnswer', () => {

    it('should set correct answer to square of 3 == 9', () => {
        
        setCorrectAnswer( 'square', 3 )

        expect(gameState.getAnswer()).toEqual(9);
    });
    
     it('should set correct answer to cube of 2 == 8', () => {
        
        setCorrectAnswer( 'cube', 2 )

        expect(gameState.getAnswer()).toEqual(8);
    });

     it('should set correct answer to sqrt of 4 == 2', () => {
        
        setCorrectAnswer( 'sqrt', 4 )

        expect(gameState.getAnswer()).toEqual(2);
    });

});