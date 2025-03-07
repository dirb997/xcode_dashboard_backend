// File that configure the connection to the database

const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xcode_user_db'
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to database:\n' + err);
    } else {
        console.log('Connected to database');
    }
});

module.exports = db;