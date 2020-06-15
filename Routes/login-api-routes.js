// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(result) {
      return res.json(result);
    })
  })

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(req.body)
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      // TeamId: req.body.TeamId
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.put("/api/user_data", (req, res) => {
    db.User.update({ TeamId: req.body.TeamId}, {
      where: {
        id: req.body.id
      }
    }).then(function(result) {
      // app.get("/api/user_data", (req, res) => {
      //   console.log(req.user);
      //   if (!req.user) {
      //     // The user is not logged in, send back an empty object
      //     res.json({});
      //   } else {
      //     // Otherwise send back the user's email and id
      //     // Sending back a password, even a hashed password, isn't a good idea
      //     res.json({
      //       email: req.user.email,
      //       id: req.user.id,
      //       TeamId: req.user.TeamId
      //     });
      //   }
      // });

      return res.status(204).end();
    })
  })

  app.put("/api/users/:id", (req, res) => {
    db.User.update({ TeamId: req.body.TeamId}, {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      return res.status(204).end();
    })
  })

  // app.put("/api/users/:thisId", (req, res) => {
  //   console.log('hi')
  //   console.log("this is req.body")
  //   console.log(req.body);
  //   console.log(req.body.TeamId)
  //   db.User.update({ TeamId: req.body.TeamId}, {
  //     where: {
  //       id: req.params.thisId
  //     }
  //   }).then(function(result) {
  //     return res.status(204).end();
  //   })
  // })



  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        TeamId: req.user.TeamId
      });
    }
  });
};
