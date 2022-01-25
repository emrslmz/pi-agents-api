const express = require('express');
const connectDB = require('./database/connection');
const app = express();

connectDB().then(err => {
    if (err) throw err;
});

app.use(express.json({ extended: false }));
app.use('/api/user', require('./api/userApi'));
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server started'));

