const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const yearlyFinanceSchema = new Schema({

    Year : {
        type : Number,
        required: true
    },

    Profit_LKR : {
        type : Number,
        required: true
    },

    Expenditure_LKR : {
        type : Number,
        required: true
    },

    Description : {
        type : String,
        required: true
    },

    Status : {
        type : String,
        required: true
    },

})

const YearlyFinance = mongoose.model("YearlyFinance", yearlyFinanceSchema);

module.exports = YearlyFinance;