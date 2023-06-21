//// Modules
const express = require('express');

//// Controllers
const userFriendsController = require("../controllers/userFriendsController");

//// Routes
const router = express.Router();

router.route('/add')
    .post(userFriendsController.createRequest);
router.route('/accept')
    .put(userFriendsController.acceptRequest);
router.route('/:userID')
    .get(userFriendsController.getFriends);
router.route('/:userID/open')
    .get(userFriendsController.getRequest);
router.route('/:userID/open/all')
    .get(userFriendsController.getAllRequest);

//// Modules
module.exports = router;