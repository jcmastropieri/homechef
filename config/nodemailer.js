const nodemailer = require("nodemailer");

async function main () {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    let info = await transporter.sendMail({
        from: '"Sender Name" <senderaddress@example.com>',
        to: "example@blah.com, example@gmail.com",
        subject: "Sender Name is inviting you to join their Team: Team name!",
        html: "<h1>Click here to join team</h1><a>link</a>"
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
}

main().catch(console.error);