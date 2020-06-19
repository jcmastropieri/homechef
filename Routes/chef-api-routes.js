var db = require("../models");
// const fileUpload = require('express-fileupload')

module.exports = function(app) {


    app.get("/api/chef", function(req, res) {
        db.User.findAll({
            include: [db.Chef]
        }).then(function(chefGetResults) {
            res.json(chefGetResults)
        })
    })

    app.get("/api/chef/:id", function(req, res) {
        db.User.findAll({
            include: [db.Chef],
            where: {
                TeamId: req.params.id
            }
        }).then(function(chefGetResults) {
            res.json(chefGetResults)
        })
    })
    
    app.post("/api/chef", function(req, res) {
        db.Chef.create(req.body).then(function(chefCreateResult) {
            res.json(chefCreateResult)
        })
    })

    // app.post('/upload', function(req, res) {
    //     if (!req.files || Object.keys(req.files).length === 0) {
    //         return res.status(400).send('No files were uploaded.');
    //       }
    //     console.log(req.files.chef); // the uploaded file object
    //     let chefFile = req.files.chef
    //     chefFile.mv("./Public/assets/TT Images/chefs/" + chefFile, function(err) {
    //         if (err) {
    //             return res.status(500).send(err);
    //         }
    //         else {
    //             res.send("File uploaded!");
    //         }
    //     })
    // });

    
}