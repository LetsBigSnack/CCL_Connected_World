//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

let getUserPictures = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM userPictures";
    let userPictureArray = [];

    db.query(sql, function (err, userPictures, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(userPictures)
        }

    })
});

/**
 * This function access the DB and retrieves all the users
 * @returns A list of all Users within the DB
 */
let uploadPicture = (userID, picturePath) => new Promise((resolve, reject) => {

    getUserPictures().then(userPictureArray => {
        if(userPictureArray.find(elem => elem.userID === userID)){
            sql = "UPDATE userPictures " +
                "SET userPicturePath = "+db.escape(picturePath)+" "+
                "WHERE userID = "+ db.escape(userID);
        }else{
            ;
            sql = "INSERT INTO userPictures (userID, userPicturePath)" +
                " VALUES (" +  db.escape(userID) +
                "," + db.escape(picturePath) +
                ")";
        }

        db.query(sql, function (err, userPictures, fields) {
            if (err) {
                reject({
                    status: 500,
                    msg: err
                });
            }else{
                resolve(userPictures)
            }
        })
    }).catch(error => {
        reject({
            status: 500,
            msg: error
        });
    })
})

let deleteUserPictures = (userID) => new Promise((resolve, reject) => {
    let sql = "DELETE FROM userPictures WHERE userID = "+ db.escape(userID);

    db.query(sql, function (err, userPictures, fields) {
        if (err) {
            return reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(userPictures)
        }

    })
});


//// Exports
module.exports = {
    getUserPictures,
    uploadPicture,
    deleteUserPictures
};
