//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

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

let changeAmount = (buyData) => new Promise((resolve, reject) => {
    let sql = "UPDATE userWallets " +
        "SET userWalletAmount = "+ db.escape(parseInt(buyData.walletAmount))+" "+
        "WHERE userID = "+ db.escape(parseInt(buyData.userID));

    console.log(sql);
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

let createWallet = (userID) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO userWallets " +
        "(userID, userWalletAmount) " +
        "VALUES ("+db.escape(userID)+", 500);"

    console.log(sql);
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


//// Exports
module.exports = {
    getUserWallet,
    changeAmount,
    createWallet
};
