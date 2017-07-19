import {square} from '../../../src/js/modules/calc';

describe('square', () =>{

    it('should return the square of a number', ()=>{

        expect(square(3)).toEqual(9);
    });
});