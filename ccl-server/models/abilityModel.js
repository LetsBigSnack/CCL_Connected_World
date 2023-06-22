//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

/**
 * Retrieves all abilities from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of abilities.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process.
 */
let getAbilities = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM abilities";

    db.query(sql, function (err, abilities, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(abilities)
        }

    })
});

/**
 * Retrieves abilities for a specific champion from the database.
 * @param {number} championID - The ID of the champion.
 * @returns {Promise<Array>} A promise that resolves to an array of abilities for the specified champion.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process.
 */
let getChampionAbilities = (championID) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM abilities WHERE championID = "+ db.escape(championID);

    db.query(sql, function (err, abilities, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(abilities)
        }

    })
});

//// Exports
module.exports = {
    getAbilities,
    getChampionAbilities
};
