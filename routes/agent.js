const express = require('express');
const Customer = require('../models/customer');
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        console.log('req.body: ', req.body);

        const newCustomer = new Customer({
            customerFirstName: req.body.customerFirstName,
            customerLastName: req.body.customerLastName,
        });

        await Customer.create(newCustomer);
        res.send('Customer added');
    } catch (err) {
        console.log('error: ', err);
    }
});

route.get('/', async (req, res) => {
    await Customer.find({}, (err, result) => {
        console.log('customer from db: ', result);
        res.send(result);
    });
});

module.exports = route;

