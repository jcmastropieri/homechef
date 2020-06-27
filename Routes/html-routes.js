// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // if (!req.user) {
    //   res.redirect("/login");
    // }
    res.sendFile(path.join(__dirname, "../Public/login-page.html"));
  });

  app.get("/newUser", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/newUser.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../Public/login-page.html"));
  });

  app.get("/newTeam", function(req, res) {
    
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.sendFile(path.join(__dirname, "../Public/newTeam.html"))
  })

  app.get("/recipe", function(req, res) {
    if (!req.user) {
      res.redirect("/login");
    }
    
    res.sendFile(path.join(__dirname, "../Public/recipe.html"))
  })

  app.get("/team", function(req, res) {
    if (!req.user) {
      res.redirect("/login");
    }
    
    res.sendFile(path.join(__dirname, "../Public/team.html"));
  })

  app.get("/grocerylist", function(req, res) {
    if (!req.user) {
      res.redirect("/login");
    }
    
    res.sendFile(path.join(__dirname, "../Public/grocerylist.html"));
  })

  app.get("/schedule", function(req, res) {
    if (!req.user) {
      res.redirect("/login")
    }
    res.sendFile(path.join(__dirname, "../Public/schedule.html"))
  })



  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    // if (!req.user) {
    //   res.redirect("/login");
    // }
    res.sendFile(path.join(__dirname, "../Public/members.html"));
  });

};
