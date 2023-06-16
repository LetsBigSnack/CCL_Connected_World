//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

let getNews = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM news ORDER BY newsDate DESC LIMIT 3";

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
    getNews
};
