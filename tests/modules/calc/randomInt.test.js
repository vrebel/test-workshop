import {randomInt} from '../../../src/js/modules/calc';

describe('randomInt', () =>{

    it('should return an integer between 0 and 10', ()=>{
        let max = 10;
        let min = 0;
        // Idealmente esse teste deveria ser feito com uma seed,
        // porem o Math.random não permite uma seed como parametro,
        // usaremos esse exemplo simplesmente para demonstrar o uso do toBeGreater/toBeLess
        for(let i = 0 ; i < 10000 ; i++){
            expect(randomInt(min,max)).toBeGreaterThanOrEqual(min);

            expect(randomInt(min,max)).toBeLessThanOrEqual(max);
        }
        
    });
});