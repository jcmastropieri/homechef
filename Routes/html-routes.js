// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    res.sendFile(path.join(__dirname, "../Public/login-page.html"));
  });

  app.get("/newUser", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    res.sendFile(path.join(__dirname, "../Public/newUser.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    res.sendFile(path.join(__dirname, "../Public/login-page.html"));
  });

  app.get("/newTeam", function(req, res) {
    // if (req.user) {
    //   res.redirect("/index");
    // }
    res.sendFile(path.join(__dirname, "../Public/newTeam.html"))
  })

  app.get("/team", function(req, res) {
    if (req.user) {
      res.redirect("/index");
    }
    res.sendFile(path.join(__dirname, "../Public/team.html"));
  })

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/index", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/index.html"));
  });

};
