const nodemailer = require('nodemailer');
require('dotenv').config();
const transporter = nodemailer.createTransport(
   {
    service: 'gmail',
    auth: {
      user: 'vongocthien0510@gmail.com',
      pass: process.env.APP_PASSWORD_GOOGLE_SECRET
    }
   }
)

exports.sendEmail = async (email, token) => {
    let mailOptions = {
        from: 'vongocthien0510@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'Account Verification Token', // Subject line
        text: 'Hello my friend',
        html: '<b>verify your account</b>'
            + ' <br/>'
            + '<span>Please verify your account by clicking the link</span>'
            + '<br/>'
            + '<span>http://localhost:3000/confirm/' + token +  '</span>'
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
            + '<p>Tên khách hàng:'+ username+'</p>'
            + '<p>Địa chỉ:'+ address+'</p>'
            + '<p>Số điện thoại:'+ phone+'</p>'
            + '<p>Tên sách:'+ products.name+'</p>'
            + '<p>Số lượng:'+ products.name+'</p>'
            + '<p>Tổng tiền:'+ total+'</p>'
            
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