import {cube} from '../../../../src/js/modules/calc';

describe('cube', () =>{

    it('should return the cube of a number', ()=>{

        expect(cube(3)).toEqual(27);
    });
});