//// Modules
const express = require('express');

//// Controllers
const patchnoteController = require("../controllers/patchnoteController");

//// Routes
const router = express.Router();


router.route('/')
    .get(patchnoteController.getPatchnotes);


//// Modules
module.exports = router;