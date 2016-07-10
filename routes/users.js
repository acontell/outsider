'use strict';

var express = require('express'),
    UserController = require('../db/controllers/user'),
    router = express.Router();

/* GET users listing. */
router.get('/', UserController.find);

/* GET user by id. */
router.get('/:id', UserController.findById);

/* POST /users */
router.post('/', UserController.create);

/* PUT /users/:id */
router.put('/:id', UserController.findByIdAndUpdate);

/* DELETE /users/:id */
router.delete('/:id', UserController.findByIdAndRemove);

module.exports = router;
