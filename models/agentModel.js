const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const agentSchema = new Schema({
    agentId: {
        type: Number,
        required: true,
        unique: true,
    },
    agentName: {
        type: String,
        required: false,
        unique: true,
        maxlength: [50, 'Maximum code length 50 characters']
    },
    agentSurveyCategoryId: {
      type: Number,
      required: false,
      unique: false,
      default: 1,
    },
    agentPicture: {
      type: String,
      required: false,
      unique: false,
    },
    numberHave: {
        type: Number,
        required: false,
        unique: false,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

const AgentModel = mongoose.model('agent', agentSchema);

module.exports = AgentModel;
