require("dotenv").config()
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const nodemailer = require("nodemailer");

// MULTER
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});

// MULTER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(express.json());



// async function main() {
//     // Generate test SMTP service account from ethereal.email
//     // Only needed if you don't have a real mail account for testing
// let testAccount = await nodemailer.createTestAccount();
// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }
// main().catch(console.error())


const post = [
  {
    name: `mike`,
    title: `Post1`,
  },
  {
    name: `smiles`,
    title: `Post2`,
  },
];

app.get("/posts", (req, res) => {});
app.post("/login", (req, res) => {});

// MULTER
app.post('/upload', upload.single('photo'), (req, res) => {
  if(req.file) {
      res.json(req.file);
  }
  else throw 'error';
});


let port = 8080;
app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
