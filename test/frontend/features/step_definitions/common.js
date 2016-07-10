'use strict';

module.exports = function () {
    this.Given('I am on the "$page" page', function (page, callback) {
        console.log(this.driver);
        callback(null, 'pending');
    });

    this.Then('I should see "$title" as the page title', function (title, callback) {
        callback(null, 'pending');
    });
};
