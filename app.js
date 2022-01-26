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

app.use('/api/agents', agentRouter);
app.use('/api/survey-categories', surveyCategoryRouter);
app.use('*', require('./database/index'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});





