//------------------------------------------------------------------------------
// EXPRESS template
// //------------------------------------------------------------------------------
//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");//(Optional)
const validator = require("validator");
const bcrypt = require("bcrypt");
const ejs = require("ejs");
const app = express();

// // Set up view engine middleware for ejs
app.set("view engine", "ejs");

// // Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// to be able to access ayour static files in public folder
app.use(express.static(`public`)); //(middleware)

// // Set up routes
app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    res.send('Hello World!');
});

//IMPORT MONGOOSE-----------------------------------------------------------------
const mongoose = require("mongoose"); //import mongoose
const url = `mongodb://localhost:27017/userAuth`;
// connect to mongoose

mongoose.connect(url, function (err) { 
  if (err) { console.log(err); }
  console.log(`Connected to MongoDB`);
});

// -----------------------------------------------------------------

//------------------TESTING VALIDATOR-------------------
console.log(validator.isEmail(`mikedbci@fmail.com`));
console.log(validator.isStrongPassword(`mikeAdbch@1`));
//------------------------------------------------------

      //------------------USING BCRYPT version 1----------------------
      // generate salt to hashpassword
      const salt = await bcrypt.genSalt(10);
      // set password to a hashed password
      password = await bcrypt.hash(password, salt);

      //----------------------------------------------------

      /////////////////bcrypt version 2//////////////////
      // This has a fuction that will allow to write an stuff
const saltRounds = 10;
bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
  const newUser = new User({
    email: req.body.username,
    password: hash,
  });
  newUser.save((err) => {
    if (!err) {
      res.render("secrets");
    } else {
      console.log(err);
    }
  });
});


// // Listen an d create port

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`app is listening at port 5000`)
})

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
