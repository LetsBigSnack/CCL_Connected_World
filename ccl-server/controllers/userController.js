//// Modules
const { validationResult } = require('express-validator');
//// Models
const userModel = require("../models/userModel");
const userChampionModel = require("../models/userChampionModel");
const userPictureModel = require("../models/userPictureModel");
const userWalletModel = require("../models/walletModel");
const userFriendModel = require("../models/userFriendModel");
const {authenticateUser, updateJWT, checkAccess} = require("../services/authentification");
//// Functions

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
        .then(async userID => {

            await userModel.generatePicture(userID).then();
            await userPictureModel.uploadPicture(userID, `userImages/${userID}.svg`).then();
            await userWalletModel.createWallet(userID).then();

            userModel.getUsers()
                .then(async users => {
                    ;
                    await authenticateUser(req.body, users, res)
                })
                .catch(error => {
                    let jsonReturnObject = {
                        success: false,
                        error: error.msg
                    }
                    res.status(error.status);
                    res.send(jsonReturnObject);
                });
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

    if(!req.user){
        let jsonReturnObject = {
            success : false,
            error: "No User"
        }
        res.status(402);
        return res.send(jsonReturnObject);
    }

    let hasAccess = checkAccess(req.user.role, parseInt(req.user.id), parseInt(req.params.userID));

    if(!hasAccess){
        let jsonReturnObject = {
            success : false,
            error: "No Access"
        }
        res.status(403);
        return res.send(jsonReturnObject);
    }

    userModel.updateUser(req.body, parseInt(req.params.userID))
        .then(async users => {
            ;
            userModel.getUser(parseInt(req.params.userID)).then(user => {
                    updateJWT(res, user)
                    let jsonReturnObject = {
                        success : true,
                        data: "User updated"
                    }
                    res.status(200);
                    res.send(jsonReturnObject);
                }
            ).catch(error => {
                ;
                let jsonReturnObject = {
                    success : false,
                    error: error.msg
                }
                res.status(error.status);
                res.send(jsonReturnObject);
            })
        })
        .catch(error => {
            ;
            let jsonReturnObject = {
                success : false,
                error: error.msg
            }
            res.status(error.status);
            res.send(jsonReturnObject);
        });
}

function deleteUser(req,res,next){

    if(!req.user){
        let jsonReturnObject = {
            success : false,
            error: "No User"
        }
        res.status(402);
        return res.send(jsonReturnObject);
    }

    let hasAccess = checkAccess(req.user.role, parseInt(req.user.id), parseInt(req.params.userID));

    if(!hasAccess){
        let jsonReturnObject = {
            success : false,
            error: "No Access"
        }
        res.status(403);
        return res.send(jsonReturnObject);
    }


    let userID = parseInt(req.params.userID);

    Promise.all([
        userPictureModel.deleteUserPictures(userID),
        userFriendModel.deleteUserFriends(userID),
        userChampionModel.deleteUserChampions(userID),
        userWalletModel.deleteUserWalletTransactions(userID)
    ])
        .then((values) => {
            userModel.deleteUser(userID)
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
        } )
        .catch(error => {
            let jsonReturnObject = {
                success : false,
                error: error.msg
            }
            res.status(error.status);
            res.send(jsonReturnObject);
        });
}

async function uploadImage(req,res,next){
    ;
    try{
        if(!req.files){
            let jsonReturnObject = {
                success : false,
                error: "No file was send"
            }
            res.status(400);
            res.send(jsonReturnObject);
        }else{
            let image = req.files.image;
            if(!image){
                let jsonReturnObject = {
                    success : false,
                    error: "No picture was specified"
                }
                res.status(400);
                res.send(jsonReturnObject);
            }else{
                const validImageTypes = ['image/gif', 'image/jpeg', 'image/png']
                if(validImageTypes.includes(image.mimetype)){
                    //TODO change file extension
                    let filename = './public/userImages/'+req.params.userID + '.jpg';
                    await image.mv(filename);
                    ;
                    userPictureModel.uploadPicture(parseInt(req.params.userID), "userImages/"+req.params.userID + ".jpg")
                        .then(userPicture => {
                            res.send({
                                success : true,
                                data: {
                                    name: filename,
                                    size: image.size
                                }
                            });
                        })
                        .catch(error => {
                            let jsonReturnObject = {
                                success : false,
                                error: error
                            }
                            res.status(500);
                            res.send(jsonReturnObject);
                        });

                }else{
                    let jsonReturnObject = {
                        success : false,
                        error: "Picture was the wrong file extension"
                    }
                    res.status(400);
                    res.send(jsonReturnObject);
                }
            }
        }
    }catch (error){
        let jsonReturnObject = {
            success : false,
            error: error
        }
        res.status(500);
        res.send(jsonReturnObject);
    }

}

function login(req,res,next){

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let jsonReturnObject = {
            success : false,
            error: errors.errors
        }
        res.status(400);

        return res.send(jsonReturnObject);
    }else{
        ;
        userModel.getUsers().then( (users) => {
            authenticateUser(req.body, users, res);
        }).catch(error => {
            let jsonReturnObject = {
                success : false,
                error: error
            }
            res.status(500);
            res.send(jsonReturnObject);
        });
    }
}


//// Exports
module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    uploadImage,
    login
};