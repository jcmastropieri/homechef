var db = require("../models");

module.exports = function(app) {
    app.get("/api/meal", function(req, res) {
        db.Team.findAll({
            include: [db.Meal]
        }).then( MealGetResults => {
            res.json(MealGetResults)
        })
    })

    app.get("/api/meal/:id", function(req,res) {
        db.Meal.findAll({
            where: {
                TeamId: req.params.id
            }
        }).then( teamIdResults => {
            res.json(teamIdResults);
        }) 
    });

    app.get("/api/meal/schedule/:user", function(req,res) {
        db.Meal.findAll({
            where: {
                id: req.params.user
            }
        }).then( userIdResults => {
            res.json(userIdResults);
        })
    });

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

    
    app.post("/api/meal", function(req, res) {
        db.Meal.create(req.body).then( mealCreateResult => {
            res.json(mealCreateResult);
        })
    })

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