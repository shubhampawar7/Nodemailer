const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    //connect with smtp
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'pawarshubham1295@gmail.com',
            pass: ''
        },
    });

    let info = await transporter.sendMail({
        from: '"shubham" <pawarshubham1295@gmail.com>', // sender address
        to: "shubham7000ssp@gmail.com", // list of receivers
        subject: "Congratulations ", // Subject line
        text: `Hi shubham , `, // plain text body
        html: `<b>Hello ,</b><br>
                   <p> Congratulation ur selected as a Software Developer</p>

                   `, // html body
    });
    console.log("Message sent: %s", info.messageId);

  res.send(info);

};

module.exports = sendMail;