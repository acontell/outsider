'use strict';

var UserModel = require('../models/user'),
    api = {
        find: function (req, res) {
            return UserModel.find(function (err, users) {
                return res.json(err ? err : users);
            });
        },
        findById: function (req, res) {
            return UserModel.findById(req.params.id, function (err, user) {
                return res.json(err ? err : user);
            });
        }
    };

module.exports = api;
