//// Modules
const express = require('express');

//// Controllers


//// Routers
const userRouter = require("../routers/users");
const patchnotesRouter = require("../routers/patches");


//// Routes
const router = express.Router();

router.use("/users", userRouter);
router.use("/patchnotes", patchnotesRouter);

//// Exports
module.exports = router;