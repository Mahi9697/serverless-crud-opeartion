'use strict';
var express = require('express');
var router = express.Router();
var userController = require('../controller/user');

router.post('/create', userController.createUser);
router.post('/login', userController.authenticateUser);

router.get('/getall', userController.getUsers);

router.put('/:userId', userController.updateUser);

router.get('/:userId', userController.getUserDetails);

router.delete('/:userId', userController.deleteUser);


module.exports = (app) => {
	app.use('/users', router);
}