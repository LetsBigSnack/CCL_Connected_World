//// Modules
const express = require('express');
const {body} = require("express-validator");
//// Controllers
const userController = require("../controllers/userController");
const userModel = require("../models/userModel");

// Services
const {updateJWT} = require("../services/authentification");


//// Routes
const router = express.Router();


router.route('/')
    .get((req,res,next)=>{
        //didn't need a controllers for 1 methode
        if(req.user){

            userModel.getUser(req.user.id).then(user => {

                updateJWT(res,user,req)

                let jsonReturnObject = {
                    success : true,
                    data: req.user
                }
                res.status(200);
                res.send(jsonReturnObject);
            }).catch(error => {
                let jsonReturnObject = {
                    success : false,
                    error: "user not logged in"
                }
                res.status(200);
                res.send(jsonReturnObject);
            });
        }else{
            let jsonReturnObject = {
                success : false,
                error: "user not logged in"
            }
            res.status(200);
            res.send(jsonReturnObject);
        }
    })
    .post([
            body('userName').exists().not().isEmpty().withMessage('Username is required.'),
            body('password').exists().not().isEmpty().withMessage('Password is required.')
        ],
        userController.login);

//// Modules
module.exports = router;