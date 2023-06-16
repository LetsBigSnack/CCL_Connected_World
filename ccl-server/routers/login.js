//// Modules
const express = require('express');

//// Controllers
const userController = require("../controllers/userController");
const {body} = require("express-validator");

//// Routes
const router = express.Router();


router.route('/')
    .get((req,res,next)=>{
        if(req.user){
            let jsonReturnObject = {
                success : true,
                data: req.user
            }
            res.status(200);
            res.send(jsonReturnObject);
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