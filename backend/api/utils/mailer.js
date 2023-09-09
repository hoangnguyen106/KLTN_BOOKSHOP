const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a reusable transporter using a separate configuration object
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'phanthanhhieuu@gmail.com',
        pass: process.env.APP_PASSWORD_GOOGLE_SECRET
    }
});

// Function to send an email
exports.sendEmail = async (email, token) => {
    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        let mailOptions = {
            from: 'phanthanhhieuu@gmail.com',
            to: email,
            subject: 'Account Verification Token',
            text: 'Hello my friend',
            html: `<b>Verify your account</b><br />
                   <span>Please verify your account by clicking the link:</span><br />
                   <a href="http://localhost:3000/confirm/${token}">Verify Now</a>`
        };

        let send = await transporter.sendMail(mailOptions);
        console.log('Email sent:', send.response);

        return true; // Indicate that the email was sent successfully
    } catch (err) {
        console.error('Error sending email:', err);
        return false; // Indicate that the email sending failed
    }
};


exports.sendEmailForgotPassword = async (email, token) => {
    let mailOptions = {
        from: '"SHOPBOOK👻"', // sender address
        to: email, // list of receivers
        subject: 'Forgot password Verification Token', // Subject line
        html: '<b>Forgot password</b>'
            + ' <br/>'
            + '<span>Please enter OTP below</span>'
            + '<br/>'
            + '<span>' + token +  '</span>'
    };
    try{
        let send = await transporter.sendMail(mailOptions);
    }
    catch(err){
        console.log(err);
        return false;
    }
    return true;
}
exports.sendMailConfirmPayment = async (email, token,username, address, phone,total,products) => {
    let mailOptions = {
        from: '"SHOPBOOK 👻"', // sender address
        to: email, // list of receivers
        subject: 'Payment Verification Token ShopBook', // Subject line
        text: 'Hello my friend',
        html: '<b>verify your account</b>'
            + ' <br/>'
            + '<p>Name:'+ username+'</p>'
            + ' <br/>'
            + '<p>address:'+ address+'</p>'
            + ' <br/>'
            + '<p>phone:'+ phone+'</p>'
            + ' <br/>'
            + '<p>products:'+ products+'</p>'
            + ' <br/>'
            + '<p>Total:'+ total+'</p>'
            + ' <br/>'
            + '<span>Please verify your account by clicking the link</span>'
            + '<br/>'
            + '<span>http://localhost:3000/payment/' + token +  '</span>'
    };
    try{
        let send = await transporter.sendMail(mailOptions);
    }
    catch(err){
        console.log(err);
        return false;
    }
    return true;
}