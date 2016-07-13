'use strict';

var _ = require('./functional'),
    fs = require('fs'),
    fileUtils = {
        takeScreenshot: function (driver, pathToFile, callback) {
            return driver
                .takeScreenshot()
                .then(_.partial(this.savePng, pathToFile))
                .then(callback);
        },
        savePng: function (pathToFile, data) {
            return new Promise(_.bind(fs.writeFile, fs, pathToFile, data.replace(/^data:image\/png;base64,/, ''), 'base64'));
        }
    };

module.exports = fileUtils;
