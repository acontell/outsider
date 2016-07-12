'use strict';

var UserModel = require('../models/user'),
    toJson = require('../../util/db_helper').toJson,
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
        },
        findByIdAndRemove: function (req, res) {
            return UserModel.findByIdAndRemove(req.params.id, req.body, toJson(res));
        }
    };

module.exports = api;
