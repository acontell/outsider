'use strict';

var root = process.cwd(),
    _ = require(root + '/util/functional'),
    fileHelper = require(root + '/util/file_helper'),
    serverCfg = require(root + '/config').testServer,
    hooks = function () {

        // Launch server and wait until it's ready before launching any feature.
        this.registerHandler('BeforeFeatures', function (features, callback) {
            process.env.NODE_ENV = 'test';
            require(root + '/app').listen(serverCfg.port, callback);
        });

        // Get the home page before running any scenario
        this.Before(function (scenario, callback) {
            this.driver
                .get(serverCfg.url + ':' + serverCfg.port)
                .then(_.constant(null))
                .then(callback);
        });

        // Take a screenshot of the screen if the scenario failed.
        this.After(function (scenario, callback) {
            scenario.isFailed() ? fileHelper.takeScreenshot(this.driver, serverCfg.getScreenshotFilePath(scenario.getName(), callback)) : callback();
        });
    };

module.exports = hooks;
