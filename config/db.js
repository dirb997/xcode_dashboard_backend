// File that configure the connection to the database

const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'xcode_user_db'
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to database: ' + err);
    } else {
        console.log('Connected to database');
    }
});

module.exports = db;