var db = require("../models")

module.exports = function(app) {

  //Returns all from the team model
    app.get("/api/team", function(req, res) {
        db.Team.findAll({
            // include: [db.Team]
        }).then( getTeamResults => {
            res.json(getTeamResults)
        })
    });

    //Returns the team that matches the id,
    //then sends script that stores the team id in local storage
    //And redirects to the new user page where that id is used to add the new user to the team
    app.get("/activation/:key", function(req, res) {
        db.Team.findAll({
          where: {
            key: req.params.key
          }
        }).then(function(results) {
          res.send(`
          <script>
          localStorage.setItem("TeamId", ${results[0].id})
          window.location.replace("/newUser");
          </script>`)    
        });
        
      });

    //Returns all where the id matches the given id
    app.get("/api/team/:id", function(req, res) {
      db.Team.findAll({
        where: {
          id: req.params.id
        }
      }).then( idTeamResults => {
        res.json(idTeamResults)
      });
    })

    //Creates a new team
    app.post("/api/team", function(req, res) {
        db.Team.create(req.body).then(function(teamCreateResult) {
            res.json(teamCreateResult)
        })
        .catch(function(err) {
          console.log(err);
        })
    })

  

}