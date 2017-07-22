import renderer from '../../../../src/js/modules/renderer';
require('jasmine-jquery');
import $ from 'jquery';

describe('renderInput', () => {

    beforeEach( ()=> {
        renderer.createPanel();
    });

    afterEach( ()=>{
        $('.panel').remove();
    });

    it('should render properly', ()=>{

        renderer.renderInput();

        expect($('.answer-input')).toBeInDOM();
    });

    it('should be inside panel div', () => {
        
        renderer.renderInput();

        expect($('.panel').find('.answer-input')).toBeInDOM();
    });
});