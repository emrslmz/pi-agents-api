const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerFirstName: {
        type: String,
        required: true,
        unique: true,
    },
    customerLastName: {
        type: String,
        required: false,
        unique: false,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    // status: {
    //     type: Number,
    //     validate : {
    //         validator : Number.isInteger,
    //         message   : '{VALUE} is not an integer value'
    //     }
    // }
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
