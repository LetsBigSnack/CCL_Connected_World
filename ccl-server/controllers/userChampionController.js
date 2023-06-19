//// Modules

//// Models
const userChampionModel = require("../models/userChampionModel");
//// Functions

/**
 * This function returns all the users in the DB
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function getUserChampions(req, res, next) {
    userChampionModel.getUserChampions(parseInt(req.params.userID))
        .then(news => {
            let jsonReturnObject = {
                success : true,
                data: news
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

function getUserChampion(req, res, next) {
    console.log(req.body);
    userChampionModel.getUserChampion(parseInt(req.body.userID), parseInt(req.body.championID))
        .then(news => {
            let jsonReturnObject = {
                success : true,
                data: news
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
    getUserChampions,
    getUserChampion
};