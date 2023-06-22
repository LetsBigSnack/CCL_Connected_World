//// Modules
const fs = require('fs');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const { pipeline } = require('stream');
//// Services
const db = require('../services/database.js').config;

//// Functions

/**
 * Retrieves all users from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of all users within the database.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process.
 */
let getUsers = () => new Promise((resolve, reject) => {
    let sql = "SELECT *,users.userID FROM users " +
        "LEFT JOIN userPictures "+
        "ON users.userID = userPictures.userID "+
        "LEFT JOIN userWallets "+
        "ON users.userID = userWallets.userID ";

    db.query(sql, function (err, users, fields) {
        if (err) {
            reject({
                status: 500,
                msg: err
            });
        } else {
            resolve(users)
        }
    })
})

/**
 * Retrieves a specific user from the database based on the provided user ID.
 * @param {number} userID - The ID of the user to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the user object.
 * @rejects {Object} An object containing the status and error message if an error occurs during the retrieval process or if no user with the specified ID is found.
 */

let getUser = (userID) => new Promise((resolve, reject) => {
    let sql = "SELECT *,users.userID FROM users " +
                "LEFT JOIN userPictures "+
                "ON users.userID = userPictures.userID "+
                "LEFT JOIN userWallets "+
                "ON users.userID = userWallets.userID "+
                "WHERE users.userID = "+ db.escape(userID);
    db.query(sql, function (err, user, fields) {
        if (err) {
            reject({
                status: 500,
                msg: err
            });
        } else {
            if(user[0]){
                resolve(user[0])
            }else{
                reject({
                    status: 404,
                    msg: "No user with that ID was found"
                });
            }

        }
    })
})

/**
 * Creates a new user in the database.
 * @param {Object} userData - The data of the user to be inserted.
 * @param {string} userData.userName - The name of the user.
 * @param {string} userData.userEmail - The email of the user.
 * @param {string} userData.userPassword - The password of the user.
 * @returns {Promise<number>} A promise that resolves to the newly inserted userID.
 * @rejects {Object} An object containing the status and error message if an error occurs during the insertion process.
 */

let createUser = (userData) => new Promise (async (resolve, reject)=> {
    userData.password = userData.userPassword;
    userData.userPassword = await bcrypt.hash(userData.userPassword, 10);

    let sql = "INSERT INTO users (userName, userEmail, userPassword)" +
        " VALUES (" +  db.escape(userData.userName) +
        "," + db.escape(userData.userEmail) +
        "," + db.escape(userData.userPassword) +
        ")";

    db.query(sql, function (err, result, fields){
        if(err) {
            reject({
                status: 500,
                msg: err
            });
        }else{
            resolve(result.insertId)
        }
    })
})

/**
 * Updates a specific user in the database based on the provided user ID.
 * @param {Object} userData - The updated data of the user.
 * @param {string} userData.userName - The updated name of the user.
 * @param {string} userData.userEmail - The updated email of the user.
 * @param {string} userData.userPassword - The updated password of the user.
 * @param {number} userID - The ID of the user to update.
 * @returns {Promise<string>} A promise that resolves to a success message indicating that the user has been updated.
 * @rejects {Object} An object containing the status and error message if an error occurs during the update process or if the request body contains invalid fields.
 */
let updateUser = (userData, userID) => new Promise (async (resolve, reject)=> {
    let sqls = "";
    if(Object.keys(userData).every(elem => ["userName", "userPassword", "userEmail"].includes(elem))){
        for (const key in userData) {
            if(userData[key]){
                if(key === "userPassword"){

                    userData.userPassword = await bcrypt.hash(userData.userPassword, 10);
                }
                let sql = "UPDATE users " +
                    "SET "+key+" = "+db.escape(userData[key])+" "+
                    "WHERE userID = "+ db.escape(userID);
                sqls += sql + ";";
            }
        }
        ;
        ;
        db.query(sqls, function (err, result, fields){
            ;
            if(err) {
                ;
                reject({
                    status: 500,
                    msg: err
                });
            }else{
                resolve("User updated");
            }
        })
    }else{
        reject({
            status: 400,
            msg: "Request Body should only contain 'userName', 'userPassword', and/or 'userEmail'"
        });
    }
})

/**
 * Deletes a specific user from the database based on the provided user ID.
 * @param {number} userID - The ID of the user to delete.
 * @returns {Promise<Object>} A promise that resolves to the deleted user object.
 * @rejects {Object} An object containing the status and error message if an error occurs during the deletion process or if no user with the specified ID is found.
 */
let deleteUser = (userID) => new Promise (async (resolve, reject)=> {
    let sql = "DELETE FROM users WHERE userID ="+ db.escape(userID);

    db.query(sql, function (err, user, fields) {
        if (err) {
            reject({
                status: 500,
                msg: err
            });
        } else {
            if(user.affectedRows){
                resolve(user)
            }else{
                reject({
                    status: 404,
                    msg: "No user with that ID was found"
                });
            }
        }
    })
})

/**
 * Generates a picture for a specific user.
 * @param {number} userID - The ID of the user.
 * @returns {Promise<void>} A promise that resolves when the picture generation is completed.
 */
async function generatePicture(userID) {

    const seed = uuid.v4();
    await saveSvg(`https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${seed}`,userID);

}

/**
 * Saves an SVG image from the provided URL to a file.
 * @param {string} url - The URL of the SVG image.
 * @param {string} fileName - The name of the file to save the SVG image.
 * @returns {Promise<void>} A promise that resolves when the SVG image is saved successfully.
 * @rejects {Error} An error object if there is an issue fetching the SVG image or saving it to a file.
 */
async function saveSvg(url, fileName) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch SVG image: ${response.status} ${response.statusText}`);
        }

        const writeStream = fs.createWriteStream(`public/userImages/${fileName}.svg`);
        await new Promise((resolve, reject) => {
            pipeline(response.body, writeStream, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    } catch (error) {
        console.error('Error saving SVG', error);
    }
}



//// Exports
module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    generatePicture
};
