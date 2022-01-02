const express = require('express');
const SurveyCategory = require('../models/surveyCategoryModel');
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        console.log('req.body: ', req.body);

        const newSurveyCategory = new SurveyCategory({
            surveyId: req.body.surveyId,
            categoryName: req.body.categoryName,
            categoryMinName: req.body.categoryMinName,
            categoryImage: req.body.categoryImage,
            active: req.body.active,
            visibility: req.body.visibility
        });

        await SurveyCategory.create(newSurveyCategory);
        res.send('Survey Category added!');
    } catch (err) {
        console.log('error: ', err);
    }
});

route.get('/', async (req, res) => {
    await SurveyCategory.find({}, (err, result) => {
        console.log('Survey Categories from db: ', result);
        res.send(result);
    });
});

module.exports = route;
