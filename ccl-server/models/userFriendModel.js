//// Modules

//// Services
const db = require('../services/database.js').config;

//// Models

//// Functions
/**
 * Retrieves the friends of a specific user from the database.
 * @param {number} userID - The ID of the user.
 * @returns {Promise<Array>} A promise that resolves to an array of friends associated with the specified user.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process.
 */
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

/**
 * Retrieves the friend requests received by a specific user from the database.
 * @param {number} userID - The ID of the user.
 * @returns {Promise<Array>} A promise that resolves to an array of friend requests received by the specified user.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process.
 */
let getRequest = (userID) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM userFriends WHERE userFriendAccept = 0  AND userID_2 = "+db.escape(userID);

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

/**
 * Retrieves all friend requests associated with a specific user from the database.
 * @param {number} userID - The ID of the user.
 * @returns {Promise<Array>} A promise that resolves to an array of all friend requests associated with the specified user.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process.
 */
let getAllRequest = (userID) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM userFriends WHERE userFriendAccept = 0  AND (userID_1 = "+db.escape(userID) + " OR "+ "userID_2 = "+db.escape(userID)+")";

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


/**
 * Creates a new friend request in the database.
 * @param {Object} userFriendData - The friend request data to be inserted.
 * @param {number} userFriendData.userID_1 - The ID of the user sending the friend request.
 * @param {number} userFriendData.userID_2 - The ID of the user receiving the friend request.
 * @returns {Promise<Array>} A promise that resolves to the created friend request.
 * @rejects {Object} An object containing the status and error message if an error occurs during the insertion process.
 */
let createRequest = (userFriendData) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO `userFriends` " +
        "(`userID_1`, `userID_2`, `userFriendAccept`) " +
        "VALUES " +
        "("+db.escape(parseInt(userFriendData.userID_1))+", " +
        ""+db.escape(parseInt(userFriendData.userID_2))+", " +
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


/**
 * Accepts a friend request in the database.
 * @param {Object} userFriendData - The friend request data to be accepted.
 * @param {number} userFriendData.userFriendID - The ID of the friend request.
 * @returns {Promise<Array>} A promise that resolves to the accepted friend request.
 * @rejects {Object} An object containing the status and error message if an error occurs during the update process.
 */

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

/**
 * Deletes the friend associations for a specific user from the database.
 * @param {number} userID - The ID of the user.
 * @returns {Promise<Array>} A promise that resolves to the deleted friend associations.
 * @rejects {Object} An object containing the status and error message if an error occurs during the deletion process.
 */
let deleteUserFriends = (userID) => new Promise((resolve, reject) => {
    let sql = "DELETE FROM userFriends WHERE userID_1 = "+db.escape(userID) + " OR userID_2 = "+db.escape(userID);

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



//// Exports
module.exports = {
    getFriends,
    getRequest,
    createRequest,
    acceptRequest,
    deleteUserFriends,
    getAllRequest
};
