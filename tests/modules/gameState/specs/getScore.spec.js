import gameState from '../../../../src/js/modules/gameState';

describe('getScore', ()=> {

    afterEach( ()=>{
        gameState.reset();
    });

    it('should be empty when there is no score', () => {
        
        let score = gameState.getScore();

        expect(score).toEqual([]);
    });

    it('should return one value when there is one score', () =>{

        gameState.addScore(true);
        let score = gameState.getScore();

        expect(score).toEqual([true]);
    });

});