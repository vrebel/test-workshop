import gameState from '../../../../src/js/modules/gameState';

describe('reset', ()=> {

    it('turn should be 0', () => {
        gameState.reset();
        let turn = gameState.getTurn();

        expect(turn).toEqual(0);
    });

    it('score should be empty', () => {
        gameState.reset();
        let score = gameState.getScore();

        expect(score).toEqual([]);
    });

});