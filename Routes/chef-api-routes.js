var db = require("../models");
const upload = require("../services/file-upload")
const fs = require('fs');
const path = require("path");
const aws = require('aws-sdk');
// const fileUpload = require('express-fileupload')

aws.config.update({
    secretAccessKey: "",
    accessKeyId: "",
    region: "ca-central-1"
});


const s3 = new aws.S3();

const singleUpload = upload.single("image");

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
            // console.log(req.body);
            // console.log(req.body.data)
            // uploadFile(req.body.data);
            // uploadFile(path.join(__dirname, req.body.chefImage));
            
            // uploadFile(req.body.chefImage)

            // var bucketParams = {
            //     Bucket : "cookingtogether",
            // };

            // s3.listObjects(bucketParams, function(err, data) {
            //     if (err) {
            //     console.log("Error", err);
            // } else {
            //     console.log("Success", data);
            //     //this works
            //     console.log(data.Contents)
            //     console.log(data.Contents[0]);
            //     // console.log(data.Contents[0].owner)
            // }
            // });
            // console.log("do you stop?")
        })
    });

    app.post("/upload/file", function(req,res) {
        
        uploadFile(req.files.chef.name, req.files.chef.data)
    })

    const uploadFile = (fileName, fileContent) => {
        // Read content from the file
        // const fileContent = fs.readFileSync(fileName);
    
        // Setting up S3 upload parameters
        const params = {
            Bucket: "cookingtogether",
            Key: fileName, // File name you want to save as in S3
            Body: fileContent
        };
    
        // Uploading files to the bucket
        s3.upload(params, function(err, data) {
            if (err) {
                throw err;
            }
            console.log(`File uploaded successfully. ${data.Location}`);
        });

        // Create the parameters for calling listObjects
        // var bucketParams = {
        //     Bucket : "cookingtogether",
        // };
  
  // Call S3 to obtain a list of the objects in the bucket
        // s3.listObjects(bucketParams, function(err, data) {
        //     if (err) {
        //     console.log("Error", err);
        // } else {
        //     console.log("Success", data);
        // }
        // });
    };

   
    // app.post("/image-upload", function(req, res) {
    //     singleUpload(req, res, function(err) {
    //         console.log("****THIS IS REQ ****")
    //         console.log(req.body.file)
    //         return res.json({"imageUrl": req.body.file})
    //     })
    // })

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