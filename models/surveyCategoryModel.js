const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveyCategorySchema = new Schema({
    surveyId: {
        type: Number,
        required: true,
        unique: true,
    },
    categoryName: {
        type: String,
        required: false,
        unique: true,
        maxlength: [60, 'Maximum code length 60 characters']
    },
    categoryMinName: {
        type: String,
        required: false,
        unique: false,
    },
    categoryImage: {
        type: String,
        required: false,
        unique: false,
    },
    active: {
        type: Boolean,
        required: false,
        unique: false,
        default: true,
    },
    visibility: {
        type: Boolean,
        required: false,
        unique: false,
        default: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

const SurveyCategoryModel = mongoose.model('surveyCategory', surveyCategorySchema);

module.exports = SurveyCategoryModel;

/*
{
    "surveyId": 1,
    "categoryName": "Valorant",
    "categoryMinName": "Valo",
    "categoryImage": "valorant_heros.png",
    "active": true,
    "visibility": true
}
*/
