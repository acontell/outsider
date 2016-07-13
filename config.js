'use strict';

var _ = require('./util/functional'),
    config = {
    mongoURI: {
        development: 'mongodb://localhost/outsider',
        test: 'mongodb://localhost/outsider-test'
    },
    testServer: {
        url: 'http://localhost',
        port: 3000,
        getScreenshotFilePath: function (scenarioName) {
            var uniqueName = _.uniqueId(scenarioName.replace(/ /g, '_').substring(0, 20));
            return process.cwd() + '/test/frontend/screenshots/' + uniqueName + '.png';
        }
    }
};

module.exports = config;
