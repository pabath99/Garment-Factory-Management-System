const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sentPaymentSchema = new Schema({

    EmployeeID : {
        type : String,
        required: true
    },

    Year : {
        type : Number,
        required: true
    },

    Month : {
        type : String,
        required: true
    },

    FinalSalary_LKR : {
        type : Number,
        required: true
    },

    PaymentSlip : {
        type : String,
        required: true
    },

    SalaryStatus : {
        type : String,
        required: true
    },



})

const SentPayment = mongoose.model("SentPayment", sentPaymentSchema);

module.exports = SentPayment;