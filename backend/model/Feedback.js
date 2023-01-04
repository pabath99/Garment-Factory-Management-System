const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({

    CustomerID : {
        type : String,
        required: true
    },

    CustomerName : {
        type : String,
        required: true
    },

    OrderType : {
        type : String,
        required: true
    },

    Feedback : {
        type : String,
        required: true
    },

    Suggestions : {
        type : String,
        required: true
    }
})

const Feedback = mongoose.model("CustomerFeedback",feedbackSchema);

module.exports = Feedback;

