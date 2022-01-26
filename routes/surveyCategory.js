const express = require('express');
const SurveyCategory = require('../models/surveyCategoryModel');
const route = express.Router();


route.get('/', async (req, res) => {
    await SurveyCategory.find()
        .then((category) => {
            res.json(category);
        })
        .catch((err) => {
            res.json(err);
        });
});

route.get('/:id', async (req, res) => {
    await SurveyCategory.findOne({_id: req.params.id})
        .then((category) => {
            res = category;
        })
        .catch((err) => {
            res.json(err);
        });
});

route.post('/', async (req, res) => {
    try {
        const newSurveyCategory = new SurveyCategory({
            surveyId: req.body.surveyId,
            categoryName: req.body.categoryName,
            categoryMinName: req.body.categoryMinName,
            categoryImage: req.body.categoryImage,
            active: req.body.active,
            visibility: req.body.visibility
        });
        await SurveyCategory.create(newSurveyCategory).then(() => console.log('created'));
    } catch (err) {
        console.log('error: ', err);
    }
});

route.put('/:id', async (req, res) => {
    await SurveyCategory.findOneAndUpdate({_id: req.params.id}, {
        surveyId: req.body.surveyId,
        categoryName: req.body.categoryName,
        categoryMinName: req.body.categoryMinName,
        categoryImage: req.body.categoryImage,
        active: req.body.active,
        visibility: req.body.visibility
    })
        .then(() => {
            res.json('update success!');
        })
        .catch((err) => {
            res.json(err);
        });
});

route.delete('/:agentId', async (req, res) => {
    await SurveyCategory.deleteOne({_id: req.params.id})
        .then((category) => {
            res.json(category);
        })
        .catch((err) => {
            res.json(err);
        });
});


module.exports = route;
