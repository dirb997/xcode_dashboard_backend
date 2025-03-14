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

    static login(username, password, callback) {
        const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
        db.query(sql, [username, password], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                if (result.length === 0) {
                    callback('Invalid user or password', null);
                } else {
                    callback(null, result[0]);
                }
            }
        });
    }

    static delete(userId, callback) {
        const sql = 'DELETE FROM users WHERE id = ?';
        db.query(sql, [userId], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
}

module.exports = User;