//// Modules
const { validationResult } = require('express-validator');

//// Models
const walletModel = require("../models/walletModel");
const transactionModel = require("../models/transactionModel");
const championModel = require("../models/championModel");
const userChampionModel = require("../models/userChampionModel");
//// Functions

/**
 * Retrieves the user's wallet.
 * @param {object} req - The HTTP request.
 * @param {object} res - The HTTP response.
 * @param {function} next - The next middleware function.
 */
function getUserWallet(req, res, next) {
    walletModel.getUserWallet(req.params.userID)
        .then(news => {
            let jsonReturnObject = {
                success : true,
                data: news
            }
            res.status(200);
            res.send(jsonReturnObject);

        })
        .catch(error => {
            let jsonReturnObject = {
                success : false,
                error: error
            }
            res.status(500);
            res.send(jsonReturnObject);
        });
}

/**
 * Buys a champion for the user.
 * @param {object} req - The HTTP request.
 * @param {object} res - The HTTP response.
 * @param {function} next - The next middleware function.
 */
async function buyChampion(req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let jsonReturnObject = {
            success : false,
            error: errors.errors
        }
        res.status(400);
        return res.send(jsonReturnObject);
    }

    let userWallet = await walletModel.getUserWallet(parseInt(req.body.userID))
        .then(data => {return data}).catch(error => {
        let jsonReturnObject = {
            success : false,
            error: error
        }
        res.status(500);
        return res.send(jsonReturnObject);
    });

    let champion = await championModel.getChampion(parseInt(req.body.championID))
        .then(data => {return data}).catch(error => {
        let jsonReturnObject = {
            success : false,
            error: error
        }
        res.status(500);
        return res.send(jsonReturnObject);
    });
    req.body.walletAmount = parseInt(userWallet.userWalletAmount) - parseInt(champion.championPrice);
    if(checkFunds(champion.championPrice, userWallet.userWalletAmount)){
        walletModel.changeAmount(req.body)
            .then(data => {
                data.userWalletID = userWallet.userWalletID;
                data.transactionAmount = -champion.championPrice;
                data.transactionDescription = "User: " + req.body.userID + " bought Champion: "
                                            + req.body.championID;

                Promise.all([transactionModel.createTransaction(data), userChampionModel.createUserChampion(req.body)])
                    .then(place => {
                        let jsonReturnObject = {
                            success : true,
                            data: data.transactionDescription
                        }
                        res.status(200);
                        res.send(jsonReturnObject);
                    })
                    .catch(error => {

                        ;
                        let jsonReturnObject = {
                            success : false,
                            error: error
                        }
                        res.status(500);
                        return res.send(jsonReturnObject);
                    });
            })
            .catch(error => {
                let jsonReturnObject = {
                    success : false,
                    error: error
                }
                res.status(500);
                res.send(jsonReturnObject);
            });
    }else{
        let jsonReturnObject = {
            success : false,
            error: "insufficient funds"
        }
        res.status(500);
        return res.send(jsonReturnObject);
    }

}



/**
 * Adds funds to the user's wallet.
 * @param {object} req - The HTTP request.
 * @param {object} res - The HTTP response.
 * @param {function} next - The next middleware function.
 */
async function addFunds(req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let jsonReturnObject = {
            success : false,
            error: errors.errors
        }
        res.status(400);
        return res.send(jsonReturnObject);
    }else{
        let userWallet = await walletModel.getUserWallet(parseInt(req.body.userID))
            .then(data => {return data}).catch(error => {
                let jsonReturnObject = {
                    success : false,
                    error: error
                }
                res.status(500);
                return res.send(jsonReturnObject);
            });
        let addFunds = parseInt(req.body.walletAmount);
        req.body.walletAmount = userWallet.userWalletAmount + addFunds;
        walletModel.changeAmount(req.body)
            .then(data => {
                data.userWalletID = userWallet.userWalletID;
                data.transactionAmount = +addFunds;
                data.transactionDescription = "User: " + req.body.userID + " added funds";

                Promise.all([transactionModel.createTransaction(data)])
                    .then(place => {
                        let jsonReturnObject = {
                            success : true,
                            data: data.transactionDescription
                        }
                        res.status(200);
                        res.send(jsonReturnObject);
                    })
                    .catch(error => {

                        ;
                        let jsonReturnObject = {
                            success : false,
                            error: error
                        }
                        res.status(500);
                        return res.send(jsonReturnObject);
                    });
            })
            .catch(error => {

                let jsonReturnObject = {
                    success : false,
                    error: error
                }
                res.status(500);
                res.send(jsonReturnObject);
            });
    }
}

/**
 * Checks if the user has sufficient funds.
 * @param {number} cost - The cost of the item.
 * @param {number} amount - The amount of funds in the wallet.
 * @returns {boolean} - True if the user has sufficient funds, false otherwise.
 */
function checkFunds(cost, amount){
    return amount - cost >= 0;
}

//// Exports
module.exports = {
    getUserWallet,
    buyChampion,
    addFunds
};