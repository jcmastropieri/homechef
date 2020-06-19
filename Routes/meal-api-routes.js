var db = require("../models");

module.exports = function(app) {
    app.get("/api/meal", function(req, res) {
        db.Team.findAll({
            include: [db.Meal]
        }).then(function(MealGetResults) {
            res.json(MealGetResults)
        })
    })

    app.get("/api/meal/:id", function(req,res) {
        db.Meal.findAll({
            where: {
                TeamId: req.params.id
            }
        }).then(function(teamIdResults) {
            res.json(teamIdResults);
        }) 
    });

    app.get("/api/meal/:day/:time/:id", function(req, res) {
        db.Meal.findAll({
            where: {
                mealDay: req.params.day,
                mealTime: req.params.time,
                TeamId: req.params.id
            }
        }).then(function(dayTimeResults) {
            res.json(dayTimeResults)
        })
    });

    
    app.post("/api/meal", function(req, res) {
        db.Meal.create(req.body).then(function(mealCreateResult) {
            res.json(mealCreateResult)
        })
    })

    
}