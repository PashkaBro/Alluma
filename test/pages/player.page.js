import Base from './base';
import sel from '../selectors/player-page.sel';
import selAllPl from '../selectors/all-players-page.sel';
import expRes from '../expected/player-page.exp';

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
        this.validatePlaceholderBySelector(sel.fieldFN, expRes.placeHTextFN);
    }

    placeholderLastName () {
        this.validatePlaceholderBySelector(sel.fieldLN, expRes.placeHTextLN);
    }

    placeholderEmail () {
        this.validatePlaceholderBySelector(sel.fieldEm, expRes.placeHTextE);
    }

    placeholderNickname () {
        this.validatePlaceholderBySelector(sel.fieldN, expRes.PlaceHTextN)
    }

}

export default new PlayerPage();