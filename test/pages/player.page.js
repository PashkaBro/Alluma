import Base from './base';
import sel from '../selectors/player-page.sel';
import { assert } from 'chai';

class PlayerPage {

    paidTodayChkb (){
        $(sel.checkboxPt).isDisplayed();
    }
}

export default new PlayerPage();