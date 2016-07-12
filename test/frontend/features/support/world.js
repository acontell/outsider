'use strict';

var driver = require('util/fe_tests_driver_factory'),
    FlowHandler = require('../flow/flow_handler');

function World() {
    this.driver = driver;
    this.flowHandler = new FlowHandler();

    this.waitForPageToBeLoaded = function () {
        return this.driver.wait.isElementDisplayed(this.driver.By.css('.test'));
    };
}

module.exports = function () {
    this.World = World;
};
