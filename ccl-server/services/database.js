//// Modules
const mysql = require('mysql');


const config = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_Database,
    multipleStatements: true
});

function handleDisconnect() {
    config.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
        }else{
            ;
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

handleDisconnect();

module.exports = {config};
