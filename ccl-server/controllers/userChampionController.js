//// Modules

//// Models
const userChampionModel = require("../models/userChampionModel");
//// Functions

/**
 * Retrieves all user champions for a specific user from the database.
 * @function getUserChampions
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {function} next - The possible middleware callback.
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

/**
 * Retrieves a specific user champion for a specific user and champion from the database.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {function} next - The possible middleware callback.
 */
function getUserChampion(req, res, next) {
    ;
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