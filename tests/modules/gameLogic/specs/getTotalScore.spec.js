import gameState from '../../../../src/js/modules/gameState';
import gameLogic from '../../../../src/js/modules/gameLogic';

describe('getTotalScore', ()=> {

    afterEach( ()=>{
        gameState.reset();
    });

    it('should return 0/0 when there is no score', () => {
        
        let totalscore = gameLogic.getTotalScore();

        expect(totalscore).toEqual('0/0');
    });

    it('should return 1/3 when there is one correct score of 3 total scores', () => {
        
        gameState.addScore(true);
        gameState.addScore(false);
        gameState.addScore(false);

        let totalscore = gameLogic.getTotalScore();

        expect(totalscore).toEqual('1/3');
    });

});