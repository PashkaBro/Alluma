import axios from 'axios';
import { assert } from 'chai';
import user from '../data/test-user';
import exp from '../expected/expected';
let resp;
let id;

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

    it('Response is Object', function () {
        assert.isTrue(typeof resp === 'object' && resp !== null && !Array.isArray(resp));
    })

    it('Response has correct message', function () {
        assert.equal(resp.message, exp.singleUserPostMessage);
    })

    it('Response is Object', function () {
        assert.isTrue(typeof resp.user === 'object' && resp.user !== null && !Array.isArray(resp.user));
    })

    it('DELETE', function () {
        browser.call(() => {
            return axios.delete(browser.config.baseUrl + '/mafia-users/' + id)
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    })

})