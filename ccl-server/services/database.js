//// Modules
const mysql = require('mysql');


const config = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_Database
});


config.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = {config};
