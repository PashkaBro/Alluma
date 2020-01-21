import sel from '../selectors/pagination_section.sel';
import exp from '../expected/pagination_section.exp';
import { assert } from 'chai';
import Base from './base'
class Pagination extends Base {
    paginationMiss() {
        this.openUsers();
        let res=sel.pageNavigation.length;
        function pagination(length){
            for(i=0;i<=length;i++){
        if (res<4)
        $(sel.paginationContent).isFalse(isDisplayed());
            }
        }
    }
    paginationApp() {
        let res=sel.pageNavigation.length;
        function pagination(length){
            for(i=0;i<=length;i++){
        if (res>4)
        $(sel.paginationContent).waitForDisplayed();
            }
        }
    }
    paginationBtnLeft() {
        this.openUsers();
        let res = $(sel.btnLeft)
        res.isDisplayed();
    }
    paginationBtnRight() {
        let res = $(sel.btnRight)
        res.isDisplayed();
    }
    pageBtnMiddle() {
        let res = $(sel.pageBtns).getCSSProperty('justify-content').value;
        assert.equal(res, exp.pagenationSectionMiddle)
    }
    btnNavNext() {
        //$$('sel.pageNavigation.length-1').click();
        let sumPages = $$('nav[aria-label="Page navigation"] li');
         let length = sumPages.length;
         sumPages[3].click(); 
        let page2 =$$('#site-content table tbody tr')[0].$('td=11')
         page2.waitForDisplayed()
       // let page2 = $$(sel.page2)
         //page2.waitForDisplayed()
    }
    btnNavPrev() {
        $$(sel.pageNavigation.length)[0].click();
        //let page1 =$$(sel.page1)
        // page1.waitForDisplayed()
    }
    btn2Nav2Page() {
        $$('sel.pageNavigation.length-2').click();
        //let page2 = $(sel.page2)
       // page2.waitForDisplayed()
    }
    btn1Nav1page() {
        $$(sel.pageNavigation)[1].click();
        let page1 = (sel.page1)
       $$page1.waitForDisplayed()
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