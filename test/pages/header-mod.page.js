import sel from '../selectors/header.sel';
import Base from './base';

class HeaderMod extends Base{

    newPlayerBtnModerat(){
        $(sel.newPlayerBtn).isDisplayed();
    }

    newGameBtnModerat(){
        $(sel.newGameBtn).isDisplayed();
    }

    continueBtnModerat(){
        $(sel.continueGameBtn).isDisplayed();
    }

}
export default new HeaderMod;