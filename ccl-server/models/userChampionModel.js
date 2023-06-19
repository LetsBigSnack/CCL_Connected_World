//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

let getUserChampions = (userID) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM userChampions " +
            "INNER JOIN champions " +
            "ON userChampions.championID = champions.championID " +
            "WHERE userChampions.userID =" + db.escape(userID);

    db.query(sql, function (err, userChampions, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(userChampions)
        }

    })
});

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

let deleteUserChampions = (userID) => new Promise((resolve, reject) => {
    let sql = "DELETE FROM userChampions " +
        "WHERE userChampions.userID =" + db.escape(userID);

    db.query(sql, function (err, userChampions, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(userChampions)
        }

    })
});


let getUserChampion = (userID, championID) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM userChampions " +
        "INNER JOIN champions " +
        "ON userChampions.championID = champions.championID " +
        "WHERE userChampions.userID =" + db.escape(userID) +" AND "+
        "champions.championID =" + db.escape(championID);

    db.query(sql, function (err, userChampions, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            if(userChampions.length > 0){
                resolve(userChampions[0])
            }
            return reject({
                status: 404,
                msg: "No userChampion found"
            });
        }

    })
});




//// Exports
module.exports = {
    getUserChampions,
    createUserChampion,
    deleteUserChampions,
    getUserChampion
};
