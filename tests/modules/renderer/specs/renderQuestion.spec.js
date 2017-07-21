import renderer from '../../../../src/js/modules/renderer';
import 'jasmine-jquery';
import $ from 'jquery';

describe('renderQuestion', () => {

    beforeEach( ()=> {
        setFixtures('<div class="panel"></div>');
    });

    afterEach( ()=>{
        renderer.removeQuestion();
    });

    it('should render properly', () => {

        renderer.renderQuestion();

        expect($('.question-message')).toBeInDOM();
    });

    it('should be inside panel div', () => {
        
        renderer.renderQuestion();

        expect($('.panel').find('.question-message')).toBeInDOM();
    });

    it('should contain the number 3 and symbol ²', ()=>{

        renderer.renderQuestion( '²' ,'3' );

        expect($('.question-message').find('span').first().text()).toEqual('3');

        expect($('.question-message').find('span').first().data('symbol')).toBe('²');
    });
});