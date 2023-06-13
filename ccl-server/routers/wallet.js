//// Modules
const express = require('express');
const {body} = require('express-validator');

//// Controllers
const walletController = require("../controllers/walletController");
const transactionController = require("../controllers/transactionController");

//// Routes
const router = express.Router();




router.route('/buy')
    .post([
            body('userID').exists().withMessage('userID is required.'),
            body('championID').exists().withMessage('championID is required.')
        ],
        walletController.buyChampion);

router.route('/add')
    .post([
            body('userID').exists().withMessage('userID is required.'),
            body('walletAmount').exists().withMessage('amount is required.')
        ],
        walletController.addFunds);

router.route('/:userID')
    .get(walletController.getUserWallet);

router.route('/transactions/:userWalletID')
    .get(transactionController.getTransactions);

//// Modules
module.exports = router;