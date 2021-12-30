const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const collectionName = 'agent';

const port = 3001;
// const uri = process.env.MONGODB_CONNECTION_STRING;
const uri = `mongodb+srv://emrslmz:emre123@cluster0.dzjzj.mongodb.net/${collectionName}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/api/customer', require('./routes/agent'));

app.listen(port, () => {
    console.log(`App is listening at http://locahost:${port}`);
});





