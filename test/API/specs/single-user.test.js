import axios from 'axios';
import { assert } from 'chai';
import data from '../data/test-user';
import exp from '../expected/expected';
let resp;
let id;
const user = data.user;
const patch = data.patch;

describe('Single-Player', function () {

    it('POST', function () {
        browser.call(() => {
            return axios.post(browser.config.baseUrl + '/mafia-users', user)
                .then(function (response) {
                    resp = response.data;
                    id = resp.user._id;
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    })

    it('Responce is Equal', function () {
    function isEquivalent(a, b) {
    
            let aProps = Object.getOwnPropertyNames(a);
            let bProps = Object.getOwnPropertyNames(b);
        for (let i = 0; i < bProps.length; i++) {
            if (bProps[i] === 'pass'){ 
                if(typeof a[aProps[i+1]] !== 'string'){
                return false
            }
        }
            else if (bProps[i] === '_id'){ 
                if(typeof a[aProps[i+1]] !== 'string' && a[aProps[i+1]].length === 24){
                return false
            }
        }
            else if (a[aProps[i+1]] !== b[bProps[i]]) {
                console.log(a[aProps[i+1]],b[bProps[i]]);
                return false;
            }
        }
        return true;
    }
    assert.isTrue(isEquivalent(resp.user, user))
})

    it('Response is Object', function () {
        assert.isTrue(typeof resp === 'object' && resp !== null && !Array.isArray(resp));
    })

    it('Response has correct message', function () {
        assert.equal(resp.message, exp.singleUserPostMessage);
    })

    it('User is Object', function () {
        assert.isTrue(typeof resp.user === 'object' && resp.user !== null && !Array.isArray(resp.user));
    })

    // it('User ID is String', function () {
    //     assert.isTrue(typeof id === 'string');
    // })

    // it(`User ID is ${exp.singleUserIdLength} characters long`, function () {
    //     assert.equal(id.length, exp.singleUserIdLength);
    // })

    // it('First name is correct', function () {
    //     assert.equal(resp.user.firstName, user.firstName);
    // })

    // // Place for the rest of tests

    // it('lastTimePaid is correct', function () {
    //     assert.equal(resp.user.lastTimePaid, user.lastTimePaid);
    // })

    // Place for the rest of tests

    it('GET', function () {
        browser.call(() => {
            return axios.get(browser.config.baseUrl + '/mafia-users/' + id)
                .then(function (response) {
                    resp = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    })

    it('PATCH', function () {
        browser.call(() => {
            return axios.patch(browser.config.baseUrl + '/mafia-users/' + id, patch)
                .then(function (response) {
                    resp = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    })

    it('Response is Object', function () {
        assert.isTrue(typeof resp === 'object' && resp !== null && !Array.isArray(resp));
    })

    it('Response has correct message', function () {
        assert.equal(resp.message, exp.singleUserPatchMessage);
    })

    // it('GET PATCH', function () {
    //     browser.call(() => {
    //         return axios.get(browser.config.baseUrl + '/mafia-users/' + id)
    //             .then(function (response) {
    //                 resp = response.data;
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //     })
    // })

    it('DELETE', function () {
        browser.call(() => {
            return axios.delete(browser.config.baseUrl + '/mafia-users/' + id)
                .then(function (response) {
                    resp = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    })

})