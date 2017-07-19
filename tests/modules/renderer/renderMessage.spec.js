import {renderQuestion} from '../../../src/js/modules/renderer';
import 'jasmine-jquery';
import $ from 'jquery';

describe('renderQuestion', () => {

    afterEach(()=>{
        $('.question-message').remove();
    });

    it('should render properly', () => {
        renderQuestion();

        expect($('.question-message')).toBeInDOM();
    });

    it('should be inside panel div', () => {
        setFixtures('<div class="panel"></div>');

        renderQuestion();

        expect($('.panel').find('.question-message')).toBeInDOM();
    });

    it('should contain the number 3 and symbol ²', ()=>{

        renderQuestion('3', '²' );

        expect($('.question-message').find('span').first().text()).toEqual('3');

        expect($('.question-message').find('span').first().data('symbol')).toBe('²');
    });
});