import Base from './base';
import sel from '../selectors/player-page.sel';
import selAllPl from '../selectors/all-players-page.sel';
import expRes from '../expected/player-page.exp';
import { assert } from 'chai';

class PlayerPage extends Base {

    paidTodayChkb (){
        $(sel.checkboxPt).isDisplayed();
    }

    paidTodayCanBeChecked (){
        $(sel.checkboxPt).isClickable();
    }

    //ifPaidAddVisit (){
     //   let visits = 3
      //  if ($(sel.checkboxPt).isSelected()){
       //     assert.equal(visits, visits + 1);
       // };

    //}
    placeholderFirstName () {
        validatePlaceholderBySelector(sel.fieldFN, expRes.placeHTextFN);
    }

    placeholderLastName () {
        validatePlaceholderBySelector(sel.fieldLN, expRes.placeHTextLN);
    }

    placeholderEmail () {
        validatePlaceholderBySelector(sel.fieldEm, expRes.placeHTextE);
    }

    placeholderNickname () {
       validatePlaceholderBySelector(sel.fieldN, expRes.PlaceHTextN)
    }

}

export default new PlayerPage();