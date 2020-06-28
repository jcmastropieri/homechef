const nodemailer = require("nodemailer")

//creates our transporter with our email information
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cookingtogetherofficial@gmail.com',
        pass: 'HomeChef2020'
    }
});

module.exports = function(app) {

    //Populate our necessary parameters from our email call
    app.post("/email", (req,res) => {   
        
        let sendEmail = req.body.email
        let sendKey = req.body.key

        //Send our email
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

//Creates our function that will send our email, with our message
const sendMail = (email, key, cb) => {
    var mailOptions = {
        from: 'anna.grace.conover@gmail.com',
        to: email,
        subject: "A friend is inviting you to their table!",
        html: "<h1>Cooking Together makes Meal Planning easy!<h2><img src='image url here'/><h2>Someone has invited you to their table! Get signed up so you can start cooking.</h2><p><a href = 'https://cooking-together.herokuapp.com/activation/" + key + "'>Join here!</a></p><p>Looking forward to the meals you make,</p><p>The CookingTogether Team</p>",
    };
    
    transporter.sendMail(mailOptions, function(error, data) {
        if (error) {
            cb(error, null);
        } else {
            cb(null, data)
        }
    });

}