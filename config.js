'use strict';

var config = {
    mongoURI: {
        development: 'mongodb://localhost/outsider',
        test: 'mongodb://localhost/outsider-test'
    },
    testServerURI: 'http://localhost:3000'
};

module.exports = config;
