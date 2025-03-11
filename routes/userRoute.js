const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password, username, gender, role } = req.body;
    User.signUp(email, password, username, gender, role, (err, userId) => {
        if (err) {
            res.status(500).send({ error: 'Error signing up' });
        } else {
            res.status(201).send({ message: 'User signedUp successfully: ', userId });
        }
    });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    User.login(username, password, (err, user) => {
        if (err) {
            res.status(401).send({ error: 'Invalid username or password' });
        } else {
            res.status(200).send({ user });
        }
    });
});

module.exports = router;