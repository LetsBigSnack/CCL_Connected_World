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
                        element.friendPicturePath = users.find(user => user.userID === otherUserID).userPicturePath;
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
    ;
    userFriendModel.getRequest(parseInt(req.params.userID))
        .then(request => {
            userModel.getUsers()
                .then(users =>  {
                    request.forEach((element) => {
                        element.requestID = element.userID_1;
                        element.requestName = users.find(user => user.userID === element.userID_1).userName;
                        element.requestPicturePath = users.find(user => user.userID === element.userID_1).userPicturePath;
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
            ;
            let jsonReturnObject = {
                success : false,
                error: error
            }
            res.status(500);
            res.send(jsonReturnObject);
        });
}

function getAllRequest(req,res,next){

    userFriendModel.getAllRequest(parseInt(req.params.userID)).then(response => {

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

async function createRequest(req, res, next) {

    if(parseInt(req.user.id) === parseInt(req.body.userID_1) &&  parseInt(req.user.id) === parseInt(req.body.userID_2)){
        let jsonReturnObject = {
            success : false,
            error: "Can't add yourself as a friend"
        }
        res.status(500);
        return res.send(jsonReturnObject);
    }


    await Promise.all([userFriendModel.getFriends(parseInt(req.user.id)),  userFriendModel.getAllRequest(parseInt(req.user.id))]).
    then(values=> {
        let friends = values[0].find(element =>
            (element.userID_1 === parseInt(req.user.id) &&  element.userID_2 === parseInt(req.body.userID_2))
            || (element.userID_2 === parseInt(req.user.id) &&  element.userID_1 === parseInt(req.body.userID_2)));

        let request = values[1].find(element =>
            (element.userID_1 === parseInt(req.user.id) &&  element.userID_2 === parseInt(req.body.userID_2))
            || (element.userID_2 === parseInt(req.user.id) &&  element.userID_1 === parseInt(req.body.userID_2)));

        if(friends || request){
            ;
            let jsonReturnObject = {
                success : false,
                error: "You are either already friends or there is a pending request"
            }
            res.status(500);
            return res.send(jsonReturnObject);
        }else{
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
    })
    .catch(error => {
        ;
        let jsonReturnObject = {
            success : false,
            error: error
        }
        res.status(500);
        return res.send(jsonReturnObject);
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
    acceptRequest,
    getAllRequest
};