import {checkAnswer} from '../../../src/js/modules/gameLogic';
import gameState from '../../../src/js/modules/gameState';

describe('checkAnswer', () => {

    it('should return true if answer is 3 and correct answer is 3', () => {
        
        gameState.setAnswer(3);

        expect( checkAnswer(3) ).toBeTruthy();
    });

    it('should return false if answer is 3 and correct answer is 5', () => {
        
        gameState.setAnswer(5);

        expect( checkAnswer(3) ).toBeFalsy();
    });
});