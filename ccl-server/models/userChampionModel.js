//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

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

//// Exports
module.exports = {
    getUserChampions
};
