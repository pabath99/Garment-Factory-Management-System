const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CusDetailsSchema = new Schema({

    CustomerID : {
        type : String,
        required: true
    },
    ShopName:{
        type: String,
        required: true
    },
    ShopNumber:{
        type: String,
        required: true
    },
    ManagerName:{
        type: String,
        required: true
    },
    ManagerNumber:{
        type: Number,
        required: true
    },
    Address:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    }

})

const CusDetails = mongoose.model("ShopCustomerDetails",CusDetailsSchema);

module.exports = CusDetails;
