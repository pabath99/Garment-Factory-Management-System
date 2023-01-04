const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    productid:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
  
    date:{
        type: String,
        required: true
    },

})

const product = mongoose.model("product", productSchema);

module.exports = product;


