import pagination from '../pages/pagination_section.page';
import { assert } from 'chai';
describe('Pagination section page', function () {

    it('Pagenation section missing', function () {

        pagination.paginationMiss();
    })

    it('Pagenation section appears', function () {
        pagination.paginationApp();

    })

    it('Pagenation has button Left', function () {
        pagination.paginationBtnLeft();

    })

    it('Pagenation has button Right', function () {
        pagination.paginationBtnRight();

    })

    it('Pages buttons in the middle', function () {
        pagination.pageBtnMiddle();

    })

    it('Button navigates to the next page', function () {
        pagination.btnNavNext();

    })

    it('Button navigates to the previous page', function () {
        pagination.btnNavPrev();

    })

    it('Pages buttons open navigate to the corresponding  page', function () {
        pagination.btnNavPage();

    })

    it('Button has size', function () {
        pagination.btnSize();

    })

    it('Button has text color', function () {
        pagination.btnTxtColor();

    })

})