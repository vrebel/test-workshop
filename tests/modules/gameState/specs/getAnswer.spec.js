import gameState from '../../../../src/js/modules/gameState';

describe('getAnswer', ()=> {

    afterEach( ()=>{
        gameState.reset();
    });

    it('should return undefined when there is no answer', () => {
        let answer = gameState.getAnswer();

        expect(answer).not.toBeDefined();
    });

    it('should return 3 when answer is 3', () => {
        gameState.setAnswer(3);
        let answer = gameState.getAnswer();

        expect(answer).toEqual(3);
    });

});