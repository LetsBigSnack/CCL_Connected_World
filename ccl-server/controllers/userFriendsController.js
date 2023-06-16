//// Modules

//// Models
const userFriendModel = require("../models/userFriendModel");
const userModel = require("../models/userModel");
//// Functions

function getFriends(req, res, next) {
    userFriendModel.getFriends(parseInt(req.params.userID))
        .then(friends => {
            userModel.getUsers()
                .then(users => {
                    friends.forEach((element) => {
                        let otherUserID = 0;
                        if(element.userID_1 === parseInt(req.params.userID)){
                           otherUserID = element.userID_2;
                        }else{
                            otherUserID = element.userID_1;
                        }
                        element.friendID = otherUserID;
                        element.friendName = users.find(user => user.userID === otherUserID).userName;
                    });
                    let jsonReturnObject = {
                        success : true,
                        data: friends
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

function getRequest(req, res, next) {
    console.log(req.params.userID);
    userFriendModel.getRequest(parseInt(req.params.userID))
        .then(request => {
            userModel.getUsers()
                .then(users => {
                    request.forEach((element) => {
                        element.requestID = element.userID_1;
                        element.requestName = users.find(user => user.userID === element.userID_1).userName;
                    });
                    let jsonReturnObject = {
                        success : true,
                        data: request
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

        })
        .catch(error => {
            console.log("error");
            let jsonReturnObject = {
                success : false,
                error: error
            }
            res.status(500);
            res.send(jsonReturnObject);
        });
}

function createRequest(req, res, next) {
    userFriendModel.createRequest(req.body)
        .then(response => {
            let jsonReturnObject = {
                success : true,
                data: response
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


function acceptRequest(req, res, next) {
    userFriendModel.acceptRequest(req.body)
        .then(response => {
            let jsonReturnObject = {
                success : true,
                data: response
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



//// Exports
module.exports = {
    getFriends,
    getRequest,
    createRequest,
    acceptRequest
};