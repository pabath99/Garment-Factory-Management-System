const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const receivedPaymentSchema = new Schema({

    CustomerID : {
        type : String,
        required: true
    },

    OrderID : {
        type : String,
        required: true
    },

    ReceivedDate : {
        type : Date,
        required: true
    },

    PaymentType : {
        type : String,
        required: true
    },

    Amount_LKR : {
        type : Number,
        required: true
    },

    PaymentSlip : {
        type : String,
        required: true
    },

    OrderStatus : {
        type : String,
        required: true
    },


})

const ReceivedPayment = mongoose.model("ReceivedPayment", receivedPaymentSchema);

module.exports = ReceivedPayment;