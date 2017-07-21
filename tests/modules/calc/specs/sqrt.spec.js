import {sqrt} from '../../../../src/js/modules/calc';

describe('sqrt', () =>{

    it('should return the square root of a number', ()=>{

        expect(sqrt(9)).toEqual(3);
    });

    it('should not work with negative numbers', () => {
        
        expect( () => { sqrt(-2); } ).toThrowError('srqt não funciona com números negativos');
    });
});