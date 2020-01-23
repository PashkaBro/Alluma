import sel from '../selectors/new-player-page.sel';
import exp from '../expected/new-player-page.exp';
import { assert } from 'chai';
import Base from './base';

class NewPlayer extends Base {
    
    emailFieldDisplayed() {
        $(sel.remEmailField).isDisplayed();
    }
}