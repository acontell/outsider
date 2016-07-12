'use strict';

var _ = require('../../../../util/functional'),
    steps = function () {
        this.Given('I am on the "$page" page', function (page, callback) {
            this
                .waitForPageToBeLoaded()
                .then(_.constant(null), _.identity)
                .then(callback);
        });

        this.Then('I should see "$title" as the page title', function (title, callback) {
            callback(null, 'pending');
        });
    };

module.exports = steps;
