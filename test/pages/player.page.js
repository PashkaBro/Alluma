import Base from './base';
import sel from '../selectors/player-page.sel';
import { assert } from 'chai';

class PlayerPage {

    paidTodayChkb (){
        $(sel.checkboxPt).isDisplayed();
    }

    paidTodayCanBeChecked (){
        $(sel.checkboxPt).isClickable();
    }
}

export default new PlayerPage();