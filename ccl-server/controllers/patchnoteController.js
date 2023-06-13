//// Modules

//// Models
const patchnoteModel = require("../models/patchnoteModel");
//// Functions

/**
 * This function returns all the users in the DB
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function getPatchnotes(req, res, next) {
    patchnoteModel.getPatchnotes()
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

//// Exports
module.exports = {
    getPatchnotes
};