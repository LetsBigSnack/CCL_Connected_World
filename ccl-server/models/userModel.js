//// Modules
const svg2png = require('svg2png');
const fs = require('fs');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const { pipeline } = require('stream');
//// Services
const db = require('../services/database.js').config;

//// Functions

/**
 * This function access the DB and retrieves all the users
 * @returns A list of all Users within the DB
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
 * This function access the DB and retrieves one user
 * @param userID The ID of the user, which will be retrieved
 * @returns A an object which represents the user
 */
let getUser = (userID) => new Promise((resolve, reject) => {
    let sql = "SELECT *,users.userID FROM users " +
                "LEFT JOIN userPictures "+
                "ON users.userID = userPictures.userID "+
                "LEFT JOIN userWallets "+
                "ON users.userID = userWallets.userID "+
                "WHERE users.userID = "+ db.escape(userID);
    console.log(sql);
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
 * This function add a new User to the DB
 * @param userData The Data, which the new user will have
 * @returns The newly inserted userID
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
        console.log("end of loop");
        console.log(sqls);
        db.query(sqls, function (err, result, fields){
            console.log("await");
            if(err) {
                console.log("big error");
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

let deleteUser = (userID) => new Promise (async (resolve, reject)=> {
    //TODO delete all dependencies
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

async function generatePicture(userID) {

    const seed = uuid.v4();
    await saveSvg(`https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${seed}`,userID);

}

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
