//// Modules

//// Models
const championModel = require("../models/championModel");
//// Functions

/**
 * Retrieves all champions from the database.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {function} next - The possible middleware callback.
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

/**
 * Retrieves a specific champion from the database.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {function} next - The possible middleware callback.
 */
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