'use strict';
var helper = {
    toJson: function (res) {
        return function (err, data) {
            return res.json(err ? err : data);
        };
    }
};

module.exports = helper;
