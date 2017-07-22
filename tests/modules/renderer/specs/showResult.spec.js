import renderer from '../../../../src/js/modules/renderer';
import 'jasmine-jquery';
import $ from 'jquery';

describe('showResult', () => {

    beforeEach( ()=>{
        $('.answer-feedback').remove();
    });

    it('should render properly', () => {
        
        renderer.showResult(true);

        expect($('.answer-feedback')).toBeInDOM();
    });

    it('should render with the class correct when passed true', () => {
        
        renderer.showResult(true);

        expect($('.answer-feedback')).toHaveClass('correct');
    });

    it('should render with the class wrong when passed false', () => {
        
        renderer.showResult(false);

        expect($('.answer-feedback')).toHaveClass('wrong');
    });

    

    it('should be removed after 1500ms', function(done){
        
        renderer.showResult(true);

        expect($('.answer-feedback')).toBeInDOM();

        setTimeout( () => {

            expect($('.answer-feedback')).not.toBeInDOM();
            done();
        }, 1500 );
        
    });

});