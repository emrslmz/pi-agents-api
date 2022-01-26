const express = require('express');
const mongoose = require('mongoose');
const agentRouter = require('./routes/agent');
const surveyCategoryRouter = require('./routes/surveyCategory');
require('dotenv/config');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res) => {
    res.send('Hi, welcome to Products RESTFUL API 😍');
});

app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    res.header('Accept', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

app.use('/api/agents', agentRouter);
app.use('/api/survey-categories', surveyCategoryRouter);
app.use('*', require('./database/index'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});





