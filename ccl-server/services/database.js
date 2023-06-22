//// Modules
const mysql = require('mysql');

// Configuration for the Database inside the .env file
const config = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_Database,
    multipleStatements: true
});

/**
 * Handles disconnections and tries to reconnect every 2 seconds
 */
function handleDisconnect() {
    config.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
        }else{
            console.log("DATABASE CONNECTED")
        }
    });

    config.on('error', (err) => {
        console.error('Database connection error:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect(); // Reconnect if the connection is lost
        } else {
            throw err;
        }
    });
}

//Starts the Connection process
handleDisconnect();

module.exports = {config};
