const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const S_orderSchema = new Schema({
  S_orderID: {
    type: String,
    required: true, // name must have a propert to enter to the database
  },

  Cus_Id: {
    type: String,
    require: true,
  },

  Cus_Name: {
    type: String,
    require: true,
  },

  Due_date: {
    type: Date,
    require: true,
  },

 

  description: {
    type: String,
    require: true,
  },

  Progress: {
    type: String,
    require: true,
  },

});

const SampleOrder = mongoose.model("Sample_Order", S_orderSchema); //strama eka yawanna yana table eke nama

module.exports = SampleOrder; //route valata one venava



   