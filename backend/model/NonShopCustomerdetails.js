const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NonshopCustomerSchema = new Schema({

    NonShopCustomerID : {
        type : String,
        required: true
    },
    OrganizationName:{
        type: String,
        required: true
    },
    OwnerName:{
        type: String,
        required: true
    },
    OwnerNumber:{
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

const NonshopCustomer = mongoose.model("NonShopCustomerDetails",NonshopCustomerSchema);

module.exports = NonshopCustomer;