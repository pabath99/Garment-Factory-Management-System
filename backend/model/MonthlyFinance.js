const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const monthlyFinanceSchema = new Schema({

    Year : {
        type : Number,
        required: true
    },

    Month : {
        type : String,
        required: true
    },

    TransportCost_LKR : {
        type : Number,
        required: true
    },

    StockCost_LKR : {
        type : Number,
        required: true
    },

    SalaryCost_LKR : {
        type : Number,
        required: true
    },

    OtherCost_LKR : {
        type : Number,
        required: true
    },

    TotalCost_LKR : {
        type : Number,
        required: true
    },

    OrderPayments_LKR : {
        type : Number,
        required: true
    },

    Profit_LKR : {
        type : Number,
        required: true
    },

})

const MonthlyFinance = mongoose.model("MonthlyFinance", monthlyFinanceSchema);

module.exports = MonthlyFinance;