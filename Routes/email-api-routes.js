const nodemailer = require("nodemailer")

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cookingtogetherofficial@gmail.com',
        pass: 'HomeChef2020'
    }
});
module.exports = function(app) {
    app.post("/email", (req,res) => {   
        console.log("Data ", req.body);
        let sendEmail = req.body.email
        let sendKey = req.body.key
        
        // console.log(sendKey);
        console.log(sendEmail);


        sendMail(sendEmail, sendKey, function(err, data) {
            if (err) {
            res.status(500).json({message: "Internal error"});
            }
            else {
            res.json({ message: "message sent"})
            }
        })
    
    });
}

const sendMail = (email, key, cb) => {
    var mailOptions = {
        from: 'anna.grace.conover@gmail.com',
        to: email,
        subject: "A friend is inviting you to their table!",
        html: "<h1>Cooking Together makes Meal Planning easy!<h2><img src='image url here'/><h2>A member of your household has invited you to their table! Get signed up so you can start cooking.</h2><p><a href = 'http://localhost:8080/activation/" + key + "'>Join here!</a></p><p>Looking forward to the meals you make,</p><p>The CookingTogether Team</p>",
    };
    
    transporter.sendMail(mailOptions, function(error, data) {
        if (error) {
            cb(error, null);
        } else {
            cb(null, data)
        }
    });

}