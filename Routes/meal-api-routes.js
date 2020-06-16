var db = require("../models");

module.exports = function(app) {
    app.get("/api/meal", function(req, res) {
        db.Team.findAll({
            include: [db.Meal]
        }).then(function(MealGetResults) {
            res.json(MealGetResults)
        })
    })

    // app.get("/api/chef/:id", function(req, res) {
    //     db.User.findAll({
    //         include: [db.Chef]
    //     }).then(function(chefGetResults) {
    //         res.json(chefGetResults)
    //     })
    // })
    
    app.post("/api/meal", function(req, res) {
        db.Meal.create(req.body).then(function(mealCreateResult) {
            res.json(mealCreateResult)
        })
    })

    
}