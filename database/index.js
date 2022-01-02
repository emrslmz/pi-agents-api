const express = require('express');
const route = express.Router();

route.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports = route;
