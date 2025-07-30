const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all users
router.get('/', async (res, req)=> {
    try{
        const result = await db.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
