//// Modules
const express = require('express');

//// Controllers


//// Routers
const userRouter = require("../routers/users");
const patchnotesRouter = require("../routers/patches");
const newsRouter = require("../routers/news");
const championsRouter = require("../routers/champions");
const walletRouter = require("./wallet");
const userChampionsRouter = require("../routers/userChampion");
const userFriendsRouter = require("../routers/userFriends");

//// Routes
const router = express.Router();

router.use("/users", userRouter);
router.use("/patchnotes", patchnotesRouter);
router.use("/news", newsRouter);
router.use("/champions", championsRouter);
router.use("/wallet", walletRouter);
router.use("/userChampions", userChampionsRouter);
router.use("/friends", userFriendsRouter);

//// Exports
module.exports = router;