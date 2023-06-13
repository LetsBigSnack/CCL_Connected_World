//// Modules
const express = require('express');

//// Controllers


//// Routers
const userRouter = require("../routers/users");
const patchnotesRouter = require("../routers/patches");
const newsRouter = require("../routers/news");
const championsRouter = require("../routers/champions");
const walletRouter = require("./wallet");


//// Routes
const router = express.Router();

router.use("/users", userRouter);
router.use("/patchnotes", patchnotesRouter);
router.use("/news", newsRouter);
router.use("/champions", championsRouter);
router.use("/wallet", walletRouter);


//// Exports
module.exports = router;