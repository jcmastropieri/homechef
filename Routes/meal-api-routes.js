var db = require("../models");

module.exports = function(app) {

    //Returns all meals
    app.get("/api/meal", function(req, res) {
        db.Team.findAll({
            include: [db.Meal]
        }).then( MealGetResults => {
            res.json(MealGetResults)
        })
    })

    //Returns all meals where the team id is the given id
    app.get("/api/meal/:id", function(req,res) {
        db.Meal.findAll({
            where: {
                TeamId: req.params.id
            }
        }).then( teamIdResults => {
            res.json(teamIdResults);
        }) 
    });

    //Returns all meals where the id is the given id
    app.get("/api/meal/schedule/:user", function(req,res) {
        db.Meal.findAll({
            where: {
                id: req.params.user
            }
        }).then( userIdResults => {
            res.json(userIdResults);
        })
    });

    // returns all meals where the day, time, and team id match the given parameters
    app.get("/api/meal/:day/:time/:id", function(req, res) {
        db.Meal.findAll({
            where: {
                mealDay: req.params.day,
                mealTime: req.params.time,
                TeamId: req.params.id
            }
        }).then( dayTimeResults => {
            res.json(dayTimeResults);
        })
    });

    //Creates a new meal
    app.post("/api/meal", function(req, res) {
        db.Meal.create(req.body).then( mealCreateResult => {
            res.json(mealCreateResult);
        })
    })

    //deletes the meal that matches the given id
    app.delete("/api/meal/:user", function(req, res) {
        db.Meal.destroy({
            where: {
                id: req.params.user
            }
        }).then( deleteResults => {
            res.json(deleteResults)
        });
        
    });

    
}