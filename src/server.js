const express = require('express');
const app = express();
require('dotenv').config();
const userRoutes = require('./routes/users');

app.use(express.json());

// Base route for users
app.use('/api/users', userRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
