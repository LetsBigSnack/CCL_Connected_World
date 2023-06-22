//// Modules
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Variables
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

/**
 * This function tries to authenticate the user based on given data
 * @param data The contains the username and password of the user
 * @param users A list of all users
 * @param res The HTTP-Response
 */
async function authenticateUser(data, users, res){
    if(data === undefined){
        let jsonReturnObject = {
            success : false,
            error: "username or password are wrong"
        }
        res.status(500);
        return res.send(jsonReturnObject);
    }
    const user = users.find(u => {
        return u.userName === data.userName
    });

    //returns pending promise --> doesn't render true
    if (user && await checkPassword(data.password, user.userPassword)) {
        // Generate an access token
        const payload =
            {
                id: user.userID,
                name: user.userName,
                email: user.userEmail,
                picture: user.userPicturePath,
                role: user.userRole,
                amount: user.userWalletAmount
            };

        const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '1000d' });

        //Cookie needs extra parameters otherwise it will not be saved in the browser
        //maxAge needs to be set otherwise the cookie is a session cookie and will be deleted
        //when the user closes the browser
        res.cookie('accessToken', accessToken,{
            maxAge:  365 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        });
        let jsonReturnObject = {
            success : true,
            data: "user logged in / created"
        }
        res.status(200);
        res.send(jsonReturnObject);
    } else {
        let jsonReturnObject = {
            success : false,
            error: "username or password are wrong"
        }
        res.status(500);
        res.send(jsonReturnObject);
    }
};

/**
 * This function checks if the authentication is valid based on the JWT Token
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware
 */
function authenticateJWT(req, res, next){
    const token = req.cookies['accessToken'];
    if (token) {
        jwt.verify(token, ACCESS_TOKEN_SECRET, (err, userToken) => {
            if (err) {
                req.errorStatus = 403;
                next();
            }
            //uses the same req, res for the function, which is called next so adding attribute here
            //allows use to access it later.
            req.user =
                {
                    id: userToken.id,
                    name: userToken.name,
                    email: userToken.email,
                    picture: userToken.picture,
                    role: userToken.role,
                    amount: userToken.amount
                };
            next();
        });
    } else {
        req.errorStatus = 401;
        next();
    }
}

/**
 * This functions updates the JWT
 * @param res HTTP-Response
 * @param user The user
 */
function updateJWT(res, user,req=undefined){
    let payload = {};
    payload =
        {
            id: user.userID,
            name: user.userName,
            email: user.userEmail,
            picture: user.userPicturePath,
            role: user.userRole,
            amount: user.userWalletAmount
        };
    //is user was updated the req.user should also be updated
    if(req){
        req.user =
            {
                id: user.userID,
                name: user.userName,
                email: user.userEmail,
                picture: user.userPicturePath,
                role: user.userRole,
                amount: user.userWalletAmount
            };
    }
    const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '1000d' });
    //Cookie needs extra parameters otherwise it will not be saved in the browser
    //maxAge needs to be set otherwise the cookie is a session cookie and will be deleted
    //when the user closes the browser
    res.cookie('accessToken', accessToken,{
        maxAge:  365 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });
}

/**
 * This functions, checks if the password is correct
 * @param password The given password
 * @param hash The hashed password
 * @returns The result of the password check
 */
async function checkPassword(password, hash){
    let pw = await bcrypt.compare(password, hash)
    return pw;
}

/**
 * This functions checks if a user has enough right to access functionality
 * @param role The role of the User in question
 * @param reqUserID The userID of the User in question
 * @param userID The userID of the original user
 * @returns {boolean} If the user has the right to access it
 */
function checkAccess(role, reqUserID, userID){
    return role === "admin" || reqUserID === userID;
}

/**
 * This functions checks if the objects is owned by the user in question
 * @param reqUserID The userID of the User in question
 * @param userID The userID of the original user
 * @returns {boolean} If the user owns it
 */
function ownership(reqUserID, userID){
    return reqUserID === userID;
}


module.exports = {
    authenticateUser,
    authenticateJWT,
    checkAccess,
    updateJWT
};