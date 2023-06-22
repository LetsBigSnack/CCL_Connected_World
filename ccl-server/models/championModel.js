//// Modules

//// Services
const db = require('../services/database.js').config;

//// Models
const abilityModel = require('../models/abilityModel');

//// Functions

/**
 * Retrieves all champions from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of champions.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process.
 */
let getChampions = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM champions";

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
 * Retrieves a specific champion from the database based on the provided champion ID.
 * @param {number} championID - The ID of the champion to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the champion object with its abilities.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process or if no champion with the specified ID is found.
 */
let getChampion = (championID) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM champions WHERE championID = "+ db.escape(championID);

    db.query(sql, async function (err, champion, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        } else {
            if (champion[0]) {
                await abilityModel.getChampionAbilities(champion[0].championID)
                    .then((abilities) => {
                        champion[0].abilities = abilities;
                    })
                    .catch((error) => {
                        reject(error);
                    });
                resolve(champion[0])
            } else {
                reject({
                    status: 404,
                    msg: "No champion with that ID was found"
                });
            }
        }

    })
});

//// Exports
module.exports = {
    getChampions,
    getChampion
};
