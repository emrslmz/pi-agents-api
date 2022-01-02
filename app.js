const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const collectionName = 'agent';

const port = 3000;
// const uri = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/api/agent', require('./routes/agent'));
app.use('/api/survey-category', require('./routes/surveyCategory'));
app.use('*', require('./database/index'));

app.listen(port, () => {
    console.log(`App is listening at http://locahost:${port}`);
});





