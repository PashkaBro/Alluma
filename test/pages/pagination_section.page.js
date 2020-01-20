import sel from '../selectors/pagination_section.sel';
import exp from '../expected/pagination_section.exp';
import { assert } from 'chai';
import Base from './base'
class Pagination extends Base {
    paginationMiss() {
        browser.url('/users')
        $(sel.paginationContent).isDisplayed(false);
    }
    paginationApp() {
        //pagination.openBase()
        //pagination.moderLogin() ;
        //randomString(max)
        // allPlayersBtnRedirect()
        $(sel.paginationContent).isDisplayed();
    }
    paginationBtnLeft() {
        browser.url('/users')
        let res = $(sel.btnLeft)
        res.isDisplayed();
    }
    paginationBtnRight() {
        let res = $(sel.btnRight)
        res.isDisplayed();
    }
    pageBtnMiddle() {
        let res = $(sel.pageBtns).getCSSProperty('vertical-align').value
        assert.equal(res, exp.pagenationSectionMiddle)
    }
    btnNavNext() {
        $$(sel.pageNavigation)[3].click();
        let page2 = $(sel.page2)
        page2.isDisplayed()
    }
    btnNavPrev() {
        $$(sel.pageNavigation)[0].click();
        let page1 = $(sel.page1)
        page1.isDisplayed()
    }
    btn2Nav2Page() {
        $$(sel.pageNavigation)[2].click();
        let page2 = $(sel.page2)
        page2.isDisplayed()
    }
    btn1Nav1page() {
        $$(sel.pageNavigation)[1].click();
        let page1 = $(sel.page1)
        page1.isDisplayed()
    }
    btnSize() {
        let res = $(sel.btnPagination).getCSSProperty('font-size').value;
        assert.equal(res, exp.btnSize)
        console.log(res)
    }
    btnTxtColor() {
        assert.equal($(sel.btnPagination).getCSSProperty('color')['parsed']['hex'], exp.btnTxtColor)
    }
}

export default new Pagination();