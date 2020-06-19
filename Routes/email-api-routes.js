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
        subject: "A friend is inviting you to their team!",
        html: "Cooking Together makes Meal Planning easy! <img src='image url here'/> <h1>Click here to sign-up!</h1><p><a href = 'http://localhost:8080/activation/" + key + "'>Join here!</a></p>",
    };
    
    transporter.sendMail(mailOptions, function(error, data) {
        if (error) {
            cb(error, null);
        } else {
            cb(null, data)
        }
    });

}