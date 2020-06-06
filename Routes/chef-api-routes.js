var db = require("../models");

module.exports = function(app) {
    app.get("/api/newChef", function(req, res) {
        db.User.findAll({
            include: [db.Chef]
        }).then(function(chefGetResults) {
            res.json(chefGetResults)
        })
    })
    
    app.post("/api/sidekick", function(req, res) {
        db.Chef.create(req.body).then(function(chefCreateResult) {
            res.json(chefCreateResult)
        })
    })
}