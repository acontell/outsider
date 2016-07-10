'use strict';

var _ = require('lodash'),
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
        setEnvAndDropModel: function (env, model, callback) {
            process.env.NODE_ENV = env;
            model.collection.drop();
            callback();
        }
    };

require('should-http');
helper.chai.use(require('chai-http')).should();

module.exports = helper;
