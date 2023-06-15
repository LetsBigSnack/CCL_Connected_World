//// Modules

//// Models
const userFriendModel = require("../models/userFriendModel");
//// Functions

function getFriends(req, res, next) {
    userFriendModel.getFriends(parseInt(req.params.userID))
        .then(friends => {
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
}

function getRequest(req, res, next) {
    console.log(req.params.userID);
    userFriendModel.getRequest(parseInt(req.params.userID))
        .then(request => {
            let jsonReturnObject = {
                success : true,
                data: request
            }
            res.status(200);
            res.send(jsonReturnObject);

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