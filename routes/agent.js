const express = require('express');
const Agent = require('../models/agentModel');
const route = express.Router();


route.get('/', async (req, res) => {
    await Agent.find()
        .then((agent) => {
            res.json(agent);
        })
        .catch((err) => {
            res.json(err);
        });
});

route.get('/:agentId', async (req, res) => {
    await Agent.findOne({agentId: req.params.agentId})
        .then((agent) => {
            res.json(agent);
        })
        .catch((err) => {
            res.json(err);
        });
});

route.post('/', async (req, res) => {
    try {
        const newAgent = new Agent({
            agentId: req.body.agentId,
            agentName: req.body.agentName,
            agentSurveyCategoryId: req.body.agentSurveyCategoryId,
            agentPicture: req.body.agentPicture,
            numberHave: req.body.numberHave
        });
        await Agent.create(newAgent).then(() => console.log('created'));
    } catch (err) {
        console.log('error: ', err);
    }
});

route.put('/:agentId', async (req, res) => {
    await Agent.findOneAndUpdate({agentId: req.params.agentId}, {
        agentName: req.body.agentName,
        agentSurveyCategoryId: req.body.agentSurveyCategoryId,
        agentPicture: req.body.agentPicture,
        numberHave: req.body.numberHave
    })
    .then(() => {
        res.json('update success!');
    })
    .catch((err) => {
        res.json(err);
    });
});

route.delete('/:agentId', async (req, res) => {
    await Agent.deleteOne({agentId: req.params.agentId})
        .then((agent) => {
            res.json(agent);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = route;

