import renderer from '../../../../src/js/modules/renderer';
import 'jasmine-jquery';
import $ from 'jquery';

describe('removeQuestion', () => {

    beforeEach( ()=> {
        renderer.createPanel();
        renderer.renderQuestion();
    });

    afterEach( ()=>{
        $('.panel').remove();
    });

    it('should remove question div from DOM', () => {

        renderer.removeQuestion();

        expect($('.question-message')).not.toBeInDOM();
    });
});