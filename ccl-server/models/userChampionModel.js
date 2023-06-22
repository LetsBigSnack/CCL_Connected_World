//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

/**
 * Retrieves the champions associated with a specific user from the database.
 * @param {number} userID - The ID of the user.
 * @returns {Promise<Array>} A promise that resolves to an array of champions associated with the specified user.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process.
 */
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

/**
 * Creates a new user champion association in the database.
 * @param {Object} userChampionData - The user champion data to be inserted.
 * @param {number} userChampionData.championID - The ID of the champion.
 * @param {number} userChampionData.userID - The ID of the user.
 * @returns {Promise<Array>} A promise that resolves to the created user champion association.
 * @rejects {Object} An object containing the status and error message if an error occurs during the insertion process.
 */
let createUserChampion  = (userChampionData) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO userChampions " +
        "(championID, userID) " +
        "VALUES (" +
        db.escape(userChampionData.championID)+", " +
        db.escape(userChampionData.userID)+
        ")";

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

/**
 * Deletes the user champion associations for a specific user from the database.
 * @param {number} userID - The ID of the user.
 * @returns {Promise<Array>} A promise that resolves to the deleted user champion associations.
 * @rejects {Object} An object containing the status and error message if an error occurs during the deletion process.
 */
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


/**
 * Retrieves a specific user champion association from the database based on the provided user ID and champion ID.
 * @param {number} userID - The ID of the user.
 * @param {number} championID - The ID of the champion.
 * @returns {Promise<Object>} A promise that resolves to the user champion association.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process or if no user champion association is found.
 */
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
