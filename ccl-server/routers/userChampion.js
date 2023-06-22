//// Modules
const express = require('express');

//// Controllers
const userChampionsController = require("../controllers/userChampionController");

//// Routes
const router = express.Router();

router.route('/')
    .post(userChampionsController.getUserChampion);


router.route('/:userID')
    .get(userChampionsController.getUserChampions);


//// Modules
module.exports = router;