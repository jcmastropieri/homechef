var db = require("../models");

module.exports = function(app) {

    //Get all from our grocery model
    app.get("/api/grocery", function(req, res) {
        db.Team.findAll({
            include: [db.Grocery]
        }).then( GroceryGetResults => {
            res.json(GroceryGetResults)
        })
    })

    //Get all from our grocery model where the team Id is the given id
    app.get("/api/grocery/:id", function(req, res) {
        db.Grocery.findAll({
            where: {
                TeamId: req.params.id
            }
        }).then( groceryTeamGetResults => {
            res.json(groceryTeamGetResults)
        })
    })

    //Creates a new grocery Item
    app.post("/api/grocery", function(req, res) {
        db.Grocery.create(req.body).then( groceryCreateResult => {
            res.json(groceryCreateResult);
        })
    })

    //Deletes a grocery item where the id is the given id
    app.delete("/api/grocery/:user", function(req, res) {
        db.Grocery.destroy({
            where: {
                id: req.params.user
            }
        }).then( deleteResults => {
            res.json(deleteResults)
        });   
    });

    //Deletes all the grocery items where the team id is the given id
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