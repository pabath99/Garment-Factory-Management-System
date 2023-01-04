const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    productname:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
  
   
})

const supplier = mongoose.model("supplier", supplierSchema);

module.exports = supplier;


