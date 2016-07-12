'use strict';

var _ = require('lodash'),
    extendedLodash = _.extend({}, _, {
        not: function (value) {
            return !value;
        }
    });

module.exports = extendedLodash;
