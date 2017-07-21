import renderer from '../../../../src/js/modules/renderer';
import 'jasmine-jquery';
import $ from 'jquery';

describe('createPanel', () => {

    beforeEach( () => {
        setFixtures('<div class="panel"><div class="score"></div><div class="restart"></div></div>');
    });

    it('should remove the score, the restart button and the panel from the DOM', ()=>{

        //renderer.removeAll();

        expect($('.panel')).not.toBeInDOM();
    });

    
});