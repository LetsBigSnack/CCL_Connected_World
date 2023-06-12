//// Modules
const express = require('express');

//// Controllers


//// Routers
const userRouter = require("../routers/users");

//// Routes
const router = express.Router();

router.use("/users", userRouter);

//// Exports
module.exports = router;