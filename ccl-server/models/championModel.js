//// Modules

//// Services
const db = require('../services/database.js').config;

//// Models
const abilityModel = require('../models/abilityModel');

//// Functions

let getChampions = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM champions";

    db.query(sql, async function (err, champions, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            /**
             * for (const champion of champions) {
             *                 const index = champions.indexOf(champion);
             *                 await abilityModel.getChampionAbilities(champion.championID)
             *                     .then((abilities) => {
             *                         champions[index].abilities = abilities;
             *                     })
             *                     .catch((error) => {
             *                         reject(error);
             *                     });
             *             }
             */
            resolve(champions)
        }

    })
});

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
