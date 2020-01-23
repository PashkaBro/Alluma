import pagination from '../pages/pagination_section.page';

describe('Pagination', function () {

    it('Pagination-section-appears', function () {
        pagination.openUsers();
        pagination.paginationApp();
    })

    it('Pagination-has-button-Left', function () {
        pagination.paginationBtnLeft();
    })

    it('Pagination has button Right', function () {
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