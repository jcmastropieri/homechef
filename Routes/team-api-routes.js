var db = require("../models")

module.exports = function(app) {
    app.get("/api/team", function(req, res) {
        db.Team.findAll({
            // include: [db.Team]
        }).then( (getTeamResults) => {
            res.json(getTeamResults)
        })
    });

    app.post("/api/team", function(req, res) {
        db.Team.create(req.body).then(function(teamCreateResult) {
            res.json(teamCreateResult)
        })
    })

}