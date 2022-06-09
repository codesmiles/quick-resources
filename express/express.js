//------------------------------------------------------------------------------
// EXPRESS template
// //------------------------------------------------------------------------------
//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");(Optional)
const ejs = require("ejs");
const app = express();

// // Set up view engine middleware for ejs
app.set("view engine", "ejs");

// // Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// to be able to access ayour static files in public folder
app.use(express.static(`public`));(middleware)

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



// // Listen an d create port

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`app is listening at port 5000`)
})

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
