const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const refundSchema = new Schema({

    RefundID : {
        type : String,
        required: true
    },

    CustomerID : {
        type : String,
        required: true
    },

    OrderID : {
        type : String,
        required: true
    },

    RequestedDate : {
        type : Date,
        required: true
    },

    Amount_LKR : {
        type : Number,
        required: true
    },

    Reason : {
        type : String,
        required: true
    },

    PaymentSlip : {
        type : String,
        required: true
    },

    Status : {
        type : String,
        required: true
    }

})

const Refund = mongoose.model("Refund", refundSchema);

module.exports = Refund;