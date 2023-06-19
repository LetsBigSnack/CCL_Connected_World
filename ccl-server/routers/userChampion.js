//// Modules
const express = require('express');

//// Controllers
const userChampionsController = require("../controllers/userChampionController");

//// Routes
const router = express.Router();


router.route('/:userID')
    .get(userChampionsController.getUserChampions);

router.route('/')
    .post(userChampionsController.getUserChampion);

//// Modules
module.exports = router;