//// Modules
const express = require('express');

//// Controllers
const championController = require("../controllers/championController");

//// Routes
const router = express.Router();


router.route('/')
    .get(championController.getChampions);

router.route('/:championID')
    .get(championController.getChampion);


//// Modules
module.exports = router;