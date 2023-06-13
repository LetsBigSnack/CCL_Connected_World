//// Modules
const express = require('express');

//// Controllers
const newsController = require("../controllers/newsController");

//// Routes
const router = express.Router();


router.route('/')
    .get(newsController.getNews);


//// Modules
module.exports = router;