//// Modules
const express = require('express');

//// Controllers
const newsController = require("../controllers/newsController");

//// Routes
const router = express.Router();


router.route('/')
    .get(newsController.getNews)
    .post((req,res,next) => {
        res.cookie("test", "199", {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        });
        res.sendStatus(200);
    });



//// Modules
module.exports = router;