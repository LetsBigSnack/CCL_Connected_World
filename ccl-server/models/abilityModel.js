//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

let getAbilities = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM abilities";

    db.query(sql, function (err, patchnotes, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(patchnotes)
        }

    })
});

let getChampionAbilities = (championID) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM abilities WHERE championID = "+ db.escape(championID);

    db.query(sql, function (err, patchnotes, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(patchnotes)
        }

    })
});

//// Exports
module.exports = {
    getAbilities,
    getChampionAbilities
};
