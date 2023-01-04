const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

    orderid:{
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

const order = mongoose.model("order", orderSchema);

module.exports = order;


