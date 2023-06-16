//// Modules
require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs')
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');
const db = require('./services/database').config;



//// App
const app = express();
// DISCUSS: put into .env
const port = 3000;

// create a write-stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/requests.logs'), { flags: 'a' })
// available formats: combined, common, dev, short, and tiny
// write detailed logs into the specified file
app.use(morgan('combined', { stream: accessLogStream }))
// write short logs into the console
app.use(morgan('common'))


//// Routers
const apiRouter = require('./routers/api');
const {authenticateJWT} = require("./services/authentification");

//// App - Configuration
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
    createParentPath: true
}));
app.use(cookieParser());
app.use(authenticateJWT);
//// App - Routes

app.use('/api',apiRouter);
app.use(express.static('public'));


app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});