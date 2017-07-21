import gameLogic from '../../../../src/js/modules/gameLogic';

describe('resetState', ()=> {

    it('should return an object', () => {
        
        let question = gameLogic.generateQuestion();

        expect(typeof question).toEqual(typeof {});
    });

    it('should return an object containing a string on obj.symbol', () => {
        
        let question = gameLogic.generateQuestion();

        expect(typeof question.symbol).toEqual(typeof '');
    });

    it('should return an object containing a number on obj.number', () => {
        
        let question = gameLogic.generateQuestion();

        expect(typeof question.number).toEqual(typeof 1);
    });
});