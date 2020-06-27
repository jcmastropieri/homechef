var db = require("../models");

module.exports = function(app) {
    app.get("/api/grocery", function(req, res) {
        db.Team.findAll({
            include: [db.Grocery]
        }).then( GroceryGetResults => {
            res.json(GroceryGetResults)
        })
    })

    app.get("/api/grocery/:id", function(req, res) {
        db.Grocery.findAll({
            where: {
                TeamId: req.params.id
            }
        }).then( groceryTeamGetResults => {
            res.json(groceryTeamGetResults)
        })
    })

    app.post("/api/grocery", function(req, res) {
        db.Grocery.create(req.body).then( groceryCreateResult => {
            res.json(groceryCreateResult);
        })
    })

    app.delete("/api/grocery/:user", function(req, res) {
        db.Grocery.destroy({
            where: {
                id: req.params.user
            }
        }).then( deleteResults => {
            res.json(deleteResults)
        });
        
    });

    app.delete("/api/grocery/clear/:teamId", function(req, res) {
        db.Grocery.destroy({
            where: {
                TeamId: req.params.teamId
            }
        }).then( deleteAllResults => {
            res.json(deleteAllResults)
        });
        
    });

    
}