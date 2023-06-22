//// Modules
const express = require('express');

//// Controllers

//// Routes
const router = express.Router();


router.route('/')
    .get((req,res,next)=>{
        res.cookie('accessToken', '', {
            maxAge: 0,
            httpOnly: true,
                secure: true,
                sameSite: 'none'
        });
        let jsonReturnObject = {
            success : true,
            data: "user logged out"
        }
        res.status(200);
        res.send(jsonReturnObject);
    })

//// Modules
module.exports = router;