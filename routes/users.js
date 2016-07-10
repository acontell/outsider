'use strict';

var express = require('express'),
    UserController = require('../db/controllers/user'),
    router = express.Router();

/* GET users listing. */
router.get('/', UserController.find);

/* GET user by id. */
router.get('/:id', UserController.findById);

module.exports = router;
