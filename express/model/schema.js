const mongoose = require("mongoose");
const { Schema } = mongoose;

const mongooseSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});



const mongooseModel = mongoose.model("user", mongooseSchema);
module.exports = mongooseModel;
