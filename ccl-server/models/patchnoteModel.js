//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

let getPatchnotes = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM patchnotes ORDER BY patchDate DESC LIMIT 3";

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
    getPatchnotes
};
