import renderer from '../../../../src/js/modules/renderer';
import 'jasmine-jquery';
import $ from 'jquery';

describe('removeAll', () => {

    beforeEach( () => {
        renderer.createPanel();
        renderer.showScore();
    });

    it('should remove the score, the restart button and the panel from the DOM', ()=>{

        renderer.removeAll();

        expect($('.restart')).not.toBeInDOM();

        expect($('.score')).not.toBeInDOM();

        expect($('.panel')).not.toBeInDOM();
    });

    
});