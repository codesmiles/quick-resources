const mongoose = require("mongoose");

// connect to mongoose
mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGODB_URI, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Mongoose Connection has been established`);
  }
});

module.exports = { mongoose };
