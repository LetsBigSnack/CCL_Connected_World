//// Modules

//// Services
const db = require('../services/database.js').config;

//// Functions

/**
 * Retrieves all user pictures from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of all user pictures within the database.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process.
 */
let getUserPictures = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM userPictures";

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
 * Uploads a user picture to the database for a specific user.
 * @param {number} userID - The ID of the user.
 * @param {string} picturePath - The path of the user picture.
 * @returns {Promise<Array>} A promise that resolves to the updated user pictures.
 * @rejects {Object} An object containing the status and error message if an error occurs during the upload process.
 */
let uploadPicture = (userID, picturePath) => new Promise((resolve, reject) => {

    getUserPictures().then(userPictureArray => {
        let sql;
        if (userPictureArray.find(elem => elem.userID === userID)) {
            sql = "UPDATE userPictures " +
                "SET userPicturePath = " + db.escape(picturePath) + " " +
                "WHERE userID = " + db.escape(userID);
        } else {
            sql = "INSERT INTO userPictures (userID, userPicturePath)" +
                " VALUES (" + db.escape(userID) +
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

/**
 * Deletes user pictures for a specific user from the database.
 * @param {number} userID - The ID of the user.
 * @returns {Promise<Array>} A promise that resolves to the deleted user pictures.
 * @rejects {Object} An object containing the status and error message if an error occurs during the deletion process.
 */
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
