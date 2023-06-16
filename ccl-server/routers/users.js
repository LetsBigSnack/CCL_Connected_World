//// Modules
const express = require('express');
const {body} = require('express-validator');

//// Controllers
const userController = require('../controllers/userController');

//// Routes
const router = express.Router();


router.route('/')
    .get(userController.getUsers)
    .post( [
        body('userName').exists().not().isEmpty().withMessage('Name is required.'),
        body('userEmail').exists().not().isEmpty().withMessage('Email is required.').isEmail().withMessage('Email format is invalid.'),
        body('userPassword').exists().not().isEmpty().withMessage('Password is required.')
    ],userController.createUser);

router.route('/:userID')
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

router.route('/:userID/picture')
    .post(userController.uploadImage);

//// Modules
module.exports = router;