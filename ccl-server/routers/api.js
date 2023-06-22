//// Modules
const express = require('express');

//// Routers
const userRouter = require("../routers/users");
const patchnotesRouter = require("../routers/patches");
const newsRouter = require("../routers/news");
const championsRouter = require("../routers/champions");
const walletRouter = require("./wallet");
const userChampionsRouter = require("../routers/userChampion");
const userFriendsRouter = require("../routers/userFriends");
const loginRouter = require("../routers/login");
const logoutRouter = require("../routers/logout");

//// Routes
const router = express.Router();

router.use("/users", userRouter);
router.use("/patchnotes", patchnotesRouter);
router.use("/news", newsRouter);
router.use("/champions", championsRouter);
router.use("/wallet", walletRouter);
router.use("/userChampions", userChampionsRouter);
router.use("/friends", userFriendsRouter);
router.use("/login", loginRouter);
router.use("/logout", logoutRouter);

//// Exports
module.exports = router;