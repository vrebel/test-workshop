import renderer from '../../../../src/js/modules/renderer';
import 'jasmine-jquery';
import $ from 'jquery';

describe('renderInput', () => {

    beforeEach( ()=> {
        setFixtures('<div class="panel"></div>');
    });

    afterEach( ()=>{
        renderer.removeInput();
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