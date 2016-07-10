'use strict';

var UserModel = require('../models/user'),
    api = {
        getAll: function (req, res) {
            return UserModel.find(function (err, users) {
                return res.json(err ? err : users);
            });
        }
    };

module.exports = api;
