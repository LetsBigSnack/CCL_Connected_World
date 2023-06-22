//// Modules

//// Models
const transactionModel = require("../models/transactionModel");
//// Functions

/**
 * Retrieves all transactions for a specific user wallet from the database.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {function} next - The possible middleware callback.
 */
function getTransactions(req, res, next) {
    transactionModel.getTransactions(req.params.userWalletID)
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

//// Exports
module.exports = {
    getTransactions
};