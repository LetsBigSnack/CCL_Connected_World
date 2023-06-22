//// Modules
const transactionModel = require('../models/transactionModel');
//// Services
const db = require('../services/database.js').config;

//// Functions

/**
 * Retrieves the wallet of a specific user from the database.
 * @param {number} userID - The ID of the user.
 * @returns {Promise<Object>} A promise that resolves to the user wallet object.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process or if no user wallet with the specified ID is found.
 */

let getUserWallet = (userID) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM userWallets WHERE userID = "+db.escape(userID);

    db.query(sql, function (err, userWallets, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            if(userWallets[0]){
                resolve(userWallets[0])
            }else{
                reject({
                    status: 404,
                    msg: "No userWallet with that ID was found"
                });
            }
        }
    })
});


/**
 * Changes the amount of a user's wallet in the database.
 * @param {Object} buyData - The data for the wallet amount change.
 * @param {number} buyData.userID - The ID of the user.
 * @param {number} buyData.walletAmount - The new wallet amount.
 * @returns {Promise<Object>} A promise that resolves to the updated buyData object.
 * @rejects {Object} An object containing the status and error message if an error occurs during the update process.
 */

let changeAmount = (buyData) => new Promise((resolve, reject) => {
    let sql = "UPDATE userWallets " +
        "SET userWalletAmount = "+ db.escape(parseInt(buyData.walletAmount))+" "+
        "WHERE userID = "+ db.escape(parseInt(buyData.userID));

    db.query(sql, function (err, result, fields){
        if(err) {
            reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(buyData);
        }
    })
});

/**
 * Creates a new wallet for a user in the database.
 * @param {number} userID - The ID of the user.
 * @returns {Promise<Object>} A promise that resolves to the result of the wallet creation.
 * @rejects {Object} An object containing the status and error message if an error occurs during the creation process.
 */
let createWallet = (userID) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO userWallets " +
        "(userID, userWalletAmount) " +
        "VALUES ("+db.escape(userID)+", 500);"

    db.query(sql, function (err, result, fields){
        if(err) {
            reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(result);
        }
    })
});

/**
 * Deletes wallet transactions and the user wallet for a specific user from the database.
 * @param {number} userID - The ID of the user.
 * @returns {Promise<Object>} A promise that resolves to the deleted wallet transactions.
 * @rejects {Object} An object containing the status and error message if an error occurs during the deletion process or if no user wallet with the specified ID is found.
 */
let deleteUserWalletTransactions = (userID) => new Promise(async (resolve, reject) => {
    let sql = "SELECT * FROM userWallets WHERE userID = " + db.escape(userID);
    let userWallet = {};
    await db.query(sql, function (err, userWallets, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        } else {
            if (userWallets[0]) {
                userWallet = userWallets[0];
                transactionModel.deleteTransactions(userWallet.userWalletID).then(async data => {
                    await deleteUserWallet(userID)
                    resolve(data)
                }).catch(error => reject({
                    status: 500,
                    msg: error
                }));
            } else {
                reject({
                    status: 404,
                    msg: "No userWallet with that ID was found"
                });
            }
        }
    })

});

/**
 * Deletes the user wallet for a specific user from the database.
 * @param {number} userID - The ID of the user.
 * @returns {Promise<Object>} A promise that resolves to the deleted user wallet object.
 * @rejects {Object} An object containing the status and error message if an error occurs during the deletion process or if no user wallet with the specified ID is found.
 */
let deleteUserWallet = (userID) => new Promise(async (resolve, reject) => {
    let sql = "DELETE FROM userWallets WHERE userID = " + db.escape(userID);
    db.query(sql, function (err, userWallets, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        } else {
            resolve(userWallets)
        }
    })
});


//// Exports
module.exports = {
    getUserWallet,
    changeAmount,
    createWallet,
    deleteUserWalletTransactions,
    deleteUserWallet
};
