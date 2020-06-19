var db = require("../models")

module.exports = function(app) {
    app.get("/api/team", function(req, res) {
        db.Team.findAll({
            // include: [db.Team]
        }).then( getTeamResults => {
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
          console.log(results[0].id)
          res.send(`
          <script>
          console.log("hi") 
          localStorage.setItem("TeamId", ${results[0].id})
          window.location.replace("/newUser");
          </script>`)    
        });
        
      });

    app.get("/api/team/:id", function(req, res) {
      db.Team.findAll({
        where: {
          id: req.params.id
        }
      }).then( idTeamResults => {
        res.json(idTeamResults)
      });
    })

    app.post("/api/team", function(req, res) {
        db.Team.create(req.body).then(function(teamCreateResult) {
            res.json(teamCreateResult)
        })
    })

  

}