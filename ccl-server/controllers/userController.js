//// Modules
const { validationResult } = require('express-validator');
//// Models
const userModel = require("../models/userModel");


//// Functions

//TODO: Only users with the role "Administrator" can change data. Users can only edit their own profile
//TODO: implement hasAccess to needed functions

/**
 * This function returns all the users in the DB
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function getUsers(req, res, next) {
    userModel.getUsers()
        .then(users => {
            let jsonReturnObject = {
                success : true,
                data: users
            }
            res.status(200);
            res.send(jsonReturnObject);

        })
        .catch(error => {
            let jsonReturnObject = {
                success : false,
                error: error
            }
            res.status(500);
            res.send(jsonReturnObject);
        });
}

/**
 * This function returns all the users in the DB
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function getUser(req, res, next) {
    let userID = parseInt(req.params.userID);
    userModel.getUser(userID)
        .then(user => {
            let jsonReturnObject = {
                success : true,
                data: user
            }
            res.status(200);
            res.send(jsonReturnObject);

        })
        .catch(error => {
            let jsonReturnObject = {
                success : false,
                error: error.msg
            }
            res.status(error.status);
            res.send(jsonReturnObject);
        });
}

function createUser(req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let jsonReturnObject = {
            success : false,
            error: errors.errors
        }
        res.status(400);
        return res.send(jsonReturnObject);
    }

    userModel.createUser(req.body)
        .then(userID => {
            let jsonReturnObject = {
                success : true,
                data: userID
            }
            res.status(200);
            res.send(jsonReturnObject);

        })
        .catch(error => {
            let jsonReturnObject = {
                success : false,
                error: error.msg
            }
            res.status(error.status);
            res.send(jsonReturnObject);
        });
}


function updateUser(req,res,next){
    userModel.updateUser(req.body, parseInt(req.params.userID))
        .then(msg => {
            let jsonReturnObject = {
                success : true,
                data: msg
            }
            res.status(200);
            res.send(jsonReturnObject);

        })
        .catch(error => {
            let jsonReturnObject = {
                success : false,
                error: error.msg
            }
            res.status(error.status);
            res.send(jsonReturnObject);
        });
}

function deleteUser(req,res,next){
    userModel.deleteUser(parseInt(req.params.userID))
        .then(msg => {
            let jsonReturnObject = {
                success : true,
                data: msg
            }
            res.status(200);
            res.send(jsonReturnObject);

        })
        .catch(error => {
            let jsonReturnObject = {
                success : false,
                error: error.msg
            }
            res.status(error.status);
            res.send(jsonReturnObject);
        });
}


//// Exports
module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};