const {Router} = require("express");
const nodemailer = require("nodemailer");
const router = Router();

router.post("/", (req, res) => {
    const emailToSend = req.body.email;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.login,
            pass: process.env.password
        }
    });

    const mailOptions = {
        from: 'pupa-plex-cinema@gmail.com',
        to: emailToSend,
        subject: 'Pupaplex',
        text: 'Ви підписалися на новини'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(400);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200);
        }
    });
});

module.exports = router;