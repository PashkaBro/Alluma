import sel from '../selectors/pagination_section.sel';
import exp from '../expected/pagination_section.exp';
import { assert } from 'chai';
import Base from './base';

class Pagination extends Base {
    
    paginationMiss() {
        this.openUsers();
        let res = sel.pageNavigation.length;
        function pagination(length) {
            for (i = 0; i <= length; i++) {
                if (res < 4)
                    $(sel.paginationContent).isFalse(isDisplayed());
            }
        }
    }

    paginationApp() {
        let res = sel.pageNavigation.length;
        function pagination(length) {
            for (i = 0; i <= length; i++) {
                if (res > 4)
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
        let sumPages = $$(sel.pageNavigation);
        let length = sumPages.length;
        sumPages[length - 1].click();
        let page2 = $(sel.page2)
        page2.waitForDisplayed()
    }

    btnNavPrev() {
        $$(sel.pageNavigation)[0].click();
        let page1 = $(sel.page1)
        page1.waitForDisplayed()
    }

    btnNavPage() {
        let sumPages = $$('li');
        let length = sumPages.length;
        for (let i = 1; i <= length - 2; i++) {
            sumPages[i].click();
            let n = i - 1;
            if (i === 1) n = '';
            $(`td=${n}1`).waitForDisplayed();
            if (i === length - 3) {
                $(`td=${i}0`).waitForDisplayed();
            }

        }
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