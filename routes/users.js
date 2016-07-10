'use strict';

var express = require('express'),
    UserController = require('../db/controllers/user'),
    router = express.Router();

/* GET users listing. */
router.get('/', UserController.getAll);

module.exports = router;
