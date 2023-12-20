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
            user: 'amaliya070104@gmail.com',
            pass: 'ihyq hihk gqvj wgpc'
        }
    });

    const mailOptions = {
        from: 'pupa-plex-cinema@gmail.com',
        to: emailToSend,
        subject: '',
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