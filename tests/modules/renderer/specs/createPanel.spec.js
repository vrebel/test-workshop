import renderer from '../../../../src/js/modules/renderer';
import 'jasmine-jquery';
import $ from 'jquery';

describe('createPanel', () => {

    it('should render properly', ()=>{

        renderer.createPanel();

        expect($('.panel')).toBeInDOM();
    });
});