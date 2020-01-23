import axios from 'axios';
import { assert } from 'chai';
let resp;

describe('All-Players', function () {

    it('GET', function () {
        browser.call(() => {
            return axios.get(browser.config.baseUrl + '/mafia-users')
                .then(function (response) {
                    resp = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        })
    })

    it('Response is Array', function () {
        assert.isTrue(Array.isArray(resp));
    })

    it('Array is not empty', function () {
        assert.isTrue(resp.length > 0);
    })

     it('Elements are objects', function () {
         let allObjects = true;
         resp.forEach(el => {
             if(!(typeof el === 'object' && el !== null && !Array.isArray(el))){
                 allObjects = false;
             }
         });
        assert.isTrue(allObjects);
     })

})