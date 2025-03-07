const db = require('../config/db');

class User { 
    static signUp(email, password, username, gender, role, callback) {
        const sql = 'INSERT INTO users (email, password, username, gender, role) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [email, password, username, gender, role], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result.insertId);
            }
        });
    }

    static login(email, password, callback) {
        const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
        db.query(sql, [email, password], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                if (result.length === 0) {
                    callback('Invalid email or password', null);
                } else {
                    callback(null, result[0]);
                }
            }
        });
    }
}

module.exports = User;