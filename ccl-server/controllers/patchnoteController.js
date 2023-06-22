//// Modules

//// Models
const patchnoteModel = require("../models/patchnoteModel");
//// Functions

/**
 * Retrieves all patchnotes from the database.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {function} next - The possible middleware callback.
 */
function getPatchnotes(req, res, next) {
    patchnoteModel.getPatchnotes()
        .then(patchnotes => {
            let jsonReturnObject = {
                success : true,
                data: patchnotes
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