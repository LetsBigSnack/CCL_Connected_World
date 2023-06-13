//// Modules

//// Models
const championModel = require("../models/championModel");
//// Functions

/**
 * This function returns all the users in the DB
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function getChampions(req, res, next) {
    championModel.getChampions()
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

function getChampion(req, res, next) {
    championModel.getChampion(parseInt(req.params.championID))
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

//// Exports
module.exports = {
    getChampions,
    getChampion
};