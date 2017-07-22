import renderer from '../../../../src/js/modules/renderer';
import 'jasmine-jquery';
import $ from 'jquery';

describe('removeInput', () => {

    beforeEach( ()=> {
        renderer.createPanel();
        renderer.renderInput();
    });

    afterAll( () => {
        $('.panel').remove();
    });

    it('should remove input div from DOM', ()=>{

        renderer.removeInput();

        expect($('.answer-input')).not.toBeInDOM();
    });
});