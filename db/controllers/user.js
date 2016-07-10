'use strict';

var UserModel = require('../models/user'),
    toJson = require('../helper').toJson,
    api = {
        find: function (req, res) {
            return UserModel.find(toJson(res));
        },
        findById: function (req, res) {
            return UserModel.findById(req.params.id, toJson(res));
        },
        create: function (req, res) {
            return UserModel.create(req.body, toJson(res));
        },
        findByIdAndUpdate: function (req, res) {
            return UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, toJson(res));
        }
    };

module.exports = api;
