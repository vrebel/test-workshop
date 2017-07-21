import gameState from '../../../../src/js/modules/gameState';

describe('addScore', ()=> {

    afterEach( ()=>{
        gameState.reset();
    });

    it('should add true to score list', () => {
        
        gameState.addScore(true);
        let score = gameState.getScore();
        let lastScore = score.pop();
        
        expect(lastScore).toEqual(true);
    });

    it('should add false to score list', () => {
        
        gameState.addScore(false);
        let score = gameState.getScore();
        let lastScore = score.pop();
        
        expect(lastScore).toEqual(false);
    });

});