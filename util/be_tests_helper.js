'use strict';

var _ = require('./functional'),
    chai = require('chai'),
    helper = {
        chai: chai,
        testProperties: function (obj1, obj2, callback) {
            _.each(obj2, function (value, key) {
                obj1.should.have.property(key);
                obj1[key].should.equal(value);
            });
            callback();
        },
        dropModel: function (model, callback) {
            model.collection.drop();
            callback();
        }
    };

require('should-http');
helper.chai.use(require('chai-http')).should();
process.env.NODE_ENV = 'test';

module.exports = helper;
