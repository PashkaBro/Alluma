import pagination from '../pages/pagination_section.page';
import {assert} from 'chai'; 
describe('Pagination section page', function () {

     it('Pagenation section missing', function () {
         browser.url('/users')
                                     
         /*Pagination section 14.1. Missing if number of players in the system <= 10 (by default).*/
         $( "pagination content-middle").isDisplayed(false);
        
             })
  
     it('Pagenation section appears', function () {
          /*registration new player*/
         let randomStr= Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          let randomEmail= Math.random().toString(36).substring(2,11) + '@domain.com';
          browser.url('/')
         $('#btn-login').click();
         $('#email').setValue('moderator'); 
         $('#pass').setValue('moder@1234');
         $('#btn-login').click();
         $('#btn-new').click();
         

         $('#firstName').setValue(randomStr);
         $('#lastName').setValue(randomStr);
         $('#email').setValue(randomEmail);
         $('#nickname').setValue(randomStr);
         $('input[type=radio]:nth-child(1)').click();
         $('#registration').click();
         $('#btn-all').click();
        /*14.2. Appears if number of players in the system is > 10 (by default).*/
        
         $("pagination content-middle").isDisplayed();
      })
    

     it('Pagenation has button Left', function () { /*14.3. Consists of:<< button on the left*/
         browser.url('/users')
         // browser.pause(10000);
         let res=$('=Previous*')
         res.isDisplayed();
     })

     it('Pagenation has button Right', function () {/*>> button on the right*/
         let res=$('=Next')
         res.isDisplayed();
     })

     it('Pages buttons in the middle', function () {
    
         let res=$('ul').getCSSProperty('vertical-align').value
         assert.equal(res,'middle')

        //console.log($$('nav[aria-label="Page navigation"] li span.page-link')[1])           //2 страница кнопка?????
      })

     it('Button navigates to the next page', function () {
         let sumPages= $$('nav[aria-label="Page navigation"] li').length
         console.log(sumPages)
         $$('nav[aria-label="Page navigation"] li')[3].click();
         let page2=$("#site-content > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)")
         page2.isDisplayed()
     })

     it('Button navigates to the previous page', function () {
         $$('nav[aria-label="Page navigation"] li')[0].click();
         let page1=$('#site-content > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)')
         page1.isDisplayed()
     })

     it('Button 2 navigates to the second page', function () {
         $$('nav[aria-label="Page navigation"] li')[2].click();
         let page2=$("#site-content > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)")
         page2.isDisplayed()
     })

     it('Button 1 navigates to the fourth page', function () {
         $$('nav[aria-label="Page navigation"] li')[1].click();
         let page1=$('#site-content > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)')
         page1.isDisplayed()
     })


     it('Button has size', function () {
         // browser.url('/users')
         let res=$('ul li span').getCSSProperty('font-size').value;
         assert.equal(res,'16px')
         console.log(res)
     })

     it('Button has text color', function () {
         assert.equal($('ul li span').getCSSProperty('color')['parsed']['hex'],'#007bff')
 
     })

})