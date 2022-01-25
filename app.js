const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/api/agents', require('./routes/agent'));
app.use('/api/survey-categorys', require('./routes/surveyCategory'));
app.use('*', require('./database/index'));

app.listen(port, () => {
    console.log(`App is listening at http://locahost:${port}`);
});





