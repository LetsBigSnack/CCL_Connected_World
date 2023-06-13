//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

let createUserChampion  = (userChampionData) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO userChampions " +
        "(championID, userID) " +
        "VALUES (" +
        db.escape(userChampionData.championID)+", " +
        db.escape(userChampionData.userID)+
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



let getUserChampions = (userID) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM transactions WHERE userWalletID = "+db.escape(userWalletID);

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
    createUserChampion,
    getUserChampions
};
