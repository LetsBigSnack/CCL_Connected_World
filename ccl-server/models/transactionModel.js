//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

/**
 * Creates a new transaction in the database.
 * @param {Object} transactionData - The transaction data to be inserted.
 * @param {number} transactionData.userWalletID - The ID of the user's wallet.
 * @param {number} transactionData.transactionAmount - The amount of the transaction.
 * @param {string} transactionData.transactionDescription - The description of the transaction.
 * @returns {Promise<Array>} A promise that resolves to the created transaction.
 * @rejects {Object} An object containing the status and error message if an error occurs during the insertion process.
 */
let createTransaction  = (transactionData) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO transactions " +
        "(userWalletID, transactionAmount, transactionDescription) " +
        "VALUES (" +
        db.escape(transactionData.userWalletID)+", " +
        db.escape(transactionData.transactionAmount)+", " +
        db.escape(transactionData.transactionDescription)+
        ")";

    db.query(sql, function (err, transactions, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(transactions)
        }
    })
});


/**
 * Retrieves transactions for a specific user wallet from the database.
 * @param {number} userWalletID - The ID of the user's wallet.
 * @returns {Promise<Array>} A promise that resolves to an array of transactions for the specified user wallet.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process.
 */
let getTransactions = (userWalletID) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM transactions WHERE userWalletID = "+db.escape(userWalletID) + " ORDER BY transactionDate DESC";

    db.query(sql, function (err, transactions, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(transactions)
        }
    })
});

/**
 * Deletes transactions for a specific user wallet from the database.
 * @param {number} userWalletID - The ID of the user's wallet.
 * @returns {Promise<Array>} A promise that resolves to the deleted transactions.
 * @rejects {Object} An object containing the status and error message if an error occurs during the deletion process.
 */
let deleteTransactions = (userWalletID) => new Promise((resolve, reject) => {
    let sql = "DELETE FROM transactions WHERE userWalletID = "+db.escape(userWalletID);

    db.query(sql, function (err, transactions, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(transactions)
        }
    })
});

//// Exports
module.exports = {
    getTransactions,
    createTransaction,
    deleteTransactions
};
