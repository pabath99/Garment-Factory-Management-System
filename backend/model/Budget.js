const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const budgetSchema = new Schema({

    Year : {
        type : Number,
        required: true
    },

    Month : {
        type : Number,
        required: true
    },

    TransportBudget_LKR : {
        type : Number,
        required: true
    },

    StockBudget_LKR : {
        type : Number,
        required: true
    },

    SalaryBudget_LKR : {
        type : Number,
        required: true
    },

    OtherCostsBudget_LKR : {
        type : Number,
        required: true
    },

    TotalBudget_LKR : {
        type : String,
        required: true
    },



})

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;