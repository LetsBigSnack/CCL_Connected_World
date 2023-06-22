//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

/**
 * Retrieves the latest patch notes from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of the latest patch notes.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process.
 */
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
