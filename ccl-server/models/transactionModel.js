//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

let createTransaction  = (transactionData) => new Promise((resolve, reject) => {

    console.log("transaction"+transactionData);

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

let deleteTransactions = (userWalletID) => new Promise((resolve, reject) => {
    console.log("during await");
    console.log(userWalletID);
    let sql = "DELETE FROM transactions WHERE userWalletID = "+db.escape(userWalletID);

    db.query(sql, function (err, transactions, fields) {
        if (err) {
            console.log(err)
            return reject({
                status: 500,
                msg: err
            });
        }else{
            console.log("resolve");
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
