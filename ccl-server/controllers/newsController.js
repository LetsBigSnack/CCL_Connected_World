//// Modules

//// Models
const newsModel = require("../models/newsModel");
//// Functions

/**
 * Retrieves all news from the database.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {function} next - The possible middleware callback.
 */
function getNews(req, res, next) {
    newsModel.getNews()
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
    getNews
};