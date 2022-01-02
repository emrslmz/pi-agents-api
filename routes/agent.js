const express = require('express');
const Agent = require('../models/agentModel');
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        console.log('req.body: ', req.body);

        const newAgent = new Agent({
            agentId: req.body.agentId,
            agentName: req.body.agentName,
            agentSurveyCategoryId: req.body.agentSurveyCategoryId,
            agentPicture: req.body.agentPicture,
            numberHave: req.body.numberHave
        });

        await Agent.create(newAgent);
        res.send('Agent added!');
    } catch (err) {
        console.log('error: ', err);
    }
});

route.get('/', async (req, res) => {
    await Agent.find({}, (err, result) => {
        console.log('agents from db: ', result);
        res.send(result);
    });
});

module.exports = route;

