import {createPanel} from '../../../../src/js/modules/renderer';
import 'jasmine-jquery';
import $ from 'jquery';

describe('createPanel', () => {

    it('should render properly', ()=>{

        createPanel();

        expect($('.panel')).toBeInDOM();
    });
});