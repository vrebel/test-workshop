import gameState from '../../../../src/js/modules/gameState';

describe('setAnswer', ()=> {

    afterEach( ()=>{
        gameState.reset();
    });

    it('should set answer to be 3', () => {
        gameState.setAnswer(3);

        let answer = gameState.getAnswer();

        expect(answer).toEqual(3);
    });

});