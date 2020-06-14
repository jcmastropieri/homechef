var db = require("../models")

module.exports = function(app) {
    app.get("/api/team", function(req, res) {
        db.Team.findAll({
            // include: [db.Team]
        }).then( (getTeamResults) => {
            res.json(getTeamResults)
        })
    });

    app.get("/activation/:key", function(req, res) {
        db.Team.findAll({
          where: {
            key: req.params.key
          }
        }).then(function(results) {
          console.log("***This is results from activation key")
          console.log(results)
          res.render(results);
          res.json(results)    
        });
        
      });

    app.post("/api/team", function(req, res) {
        db.Team.create(req.body).then(function(teamCreateResult) {
            res.json(teamCreateResult)
        })
    })

  

}