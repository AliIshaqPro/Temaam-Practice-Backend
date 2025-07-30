const express = require('express');
const app = express();
const userRoute = require('./routes/users');

app.use(express.json());
app.use('/api/users', userRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

module.exports = app;