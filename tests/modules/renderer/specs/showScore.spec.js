import renderer from '../../../../src/js/modules/renderer';
import 'jasmine-jquery';
import $ from 'jquery';

describe('showScore', () => {

    beforeEach( ()=> {
        renderer.createPanel();
    });

    afterEach( ()=>{
        $('.panel').remove();
    });

    it('should render properly', () => {

        renderer.showScore();

        expect($('.score')).toBeInDOM();
    });

    it('should be inside panel div', () => {
        
        renderer.showScore();


        expect($('.panel').find('.score')).toBeInDOM();
    });

    it('should create button restart', ()=>{

        renderer.showScore();

        expect($('.restart')).toBeInDOM();
    });

    it('should render 1/1 when passed 1/1', ()=>{

        renderer.showScore('1/1');

        expect($('.score').text() ).toBe('1/1');
    });
});