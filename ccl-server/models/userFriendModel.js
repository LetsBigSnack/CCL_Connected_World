//// Modules

//// Services
const db = require('../services/database.js').config;

//// Models

//// Functions

let getFriends = (userID) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM userFriends WHERE userFriendAccept = 1  AND (userID_1 = "+db.escape(userID) + " OR "+ "userID_2 = "+db.escape(userID)+")";

    db.query(sql, async function (err, friends, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(friends)
        }

    })
});

let getRequest = (userID) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM userFriends WHERE userFriendAccept = 0  AND (userID_1 = "+db.escape(userID) + " OR "+ "userID_2 = "+db.escape(userID)+")";

    db.query(sql, async function (err, requests, fields) {
        if (err) {
            console.log("error")
            return reject({
                status: 500,
                msg: err
            });
        }else{
            console.log("here");
            console.log(requests);
            resolve(requests)
        }

    })
});

let createRequest = (userFriendData) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO `userFriends` " +
        "(`userID_1`, `userID_2`, `userFriendAccept`) " +
        "VALUES " +
        "("+db.escape(userFriendData.userID_1)+", " +
        ""+db.escape(userFriendData.userID_2)+", " +
        "0);"
    db.query(sql, async function (err, requests, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(requests)
        }

    })
});



let acceptRequest = (userFriendData) => new Promise((resolve, reject) => {
    let sql = "UPDATE `userFriends` SET `userFriendAccept` = 1 " +
            "WHERE userFriendID = "+db.escape(userFriendData.userFriendID);

    db.query(sql, async function (err, champions, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(champions)
        }

    })
});


//// Exports
module.exports = {
    getFriends,
    getRequest,
    createRequest,
    acceptRequest
};
