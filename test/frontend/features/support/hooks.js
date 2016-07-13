'use strict';

var config = require(process.cwd() + '/config'),
    hooks = function () {
        this.Before(function () {
            this.driver.get(config.testServerURI);
        });
    };

module.exports = hooks;
