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
        //browser.url('/users')
        // browser.pause(10000);
       // let res = $('=Previous*')
       // res.isDisplayed();
    })

    it('Pagenation has button Right', function () {/*>> button on the right*/
        pagination.paginationBtnRight();
       // let res = $('=Next')
       // res.isDisplayed();
    })

    it('Pages buttons in the middle', function () {
        pagination.pageBtnMiddle();
        //let res = $('ul').getCSSProperty('vertical-align').value
        //assert.equal(res, 'middle')

        //console.log($$('nav[aria-label="Page navigation"] li span.page-link')[1])           //2 страница кнопка?????
    })

    it('Button navigates to the next page', function () {
        //pagination.btnNavNext();
        let sumPages = $$('nav[aria-label="Page navigation"] li');
       let length = sumPages.length;
       sumPages[3].click();
     //let page2= $$('#site-content table tbody tr')[0].$('td=11')//.waitForDisplayed();
    
       //let page2 = $("#site-content > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)")
       
        page2.waitForDisplayed();
    })

    it('Button navigates to the previous page', function () {
       // pagination.btnNavPrev();
        $$('nav[aria-label="Page navigation"] li')[0].click();
        let page1 = $('#site-content > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)')
        page1.isDisplayed()
    })

    it('Button 2 navigates to the second page', function () {
        //pagination.btn2Nav2Page();
        $$('nav[aria-label="Page navigation"] li')[2].click();
        let page2 = $("#site-content > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)")
        page2.isDisplayed()
    })

    it('Button 1 navigates to the first page', function () {
        //pagination.btn1Nav1page();
        $$('nav[aria-label="Page navigation"] li')[1].click();
        let page1 = $('#site-content > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)')
        page1.isDisplayed()
    })

    it('Button has size', function () {
        // browser.url('/users')
        pagination.btnSize();
        //let res = $('ul li span').getCSSProperty('font-size').value;
        //assert.equal(res, '16px')
       // console.log(res)
    })

    it('Button has text color', function () {
        pagination.btnTxtColor();
        //assert.equal($('ul li span').getCSSProperty('color')['parsed']['hex'], '#007bff')

    })

})