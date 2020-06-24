// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
// const aws = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");

const fileUpload = require('express-fileupload');




// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("Public"));

// const s3 = new aws.s3({});



// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(fileUpload())

// var upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: "cookingtogether",
//     metadata: function (req, file, cb) {
//       cb(null, {fieldName: file.fieldname});
//     },
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString())
//     }
//   })
// })

// app.post('/upload', function(req, res) {
//   if (!req.files || Object.keys(req.files).length === 0) {
//       return res.status(400).send('No files were uploaded.');
//     }
//   console.log(req.files.chef); // the uploaded file object
//   let chefFile = req.files.chef
//   chefFile.mv("./Public/assets/TT Images/chefs/" + chefFile, function(err) {
//       if (err) {
//           return res.status(500).send(err);
//       }
//       else {
//           res.send("File uploaded!");
//       }
//   })
// });

// Requiring our routes
require("./Routes/login-api-routes.js")(app);
require("./Routes/chef-api-routes.js")(app);
require("./Routes/html-routes.js")(app);
require("./Routes/team-api-routes.js")(app);
require("./Routes/email-api-routes.js")(app);
require("./Routes/meal-api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
