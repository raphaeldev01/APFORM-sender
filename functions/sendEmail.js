const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendEmail = async (toEmail, name, subject, message, senderMail) => {

    if(!toEmail || !name || !subject || !message || !senderMail) {
        return { error: true, message: "Todos os campos são obrigatórios." };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.host,
            port: process.env.port,
            auth: {
                user: process.env.user,
                pass: process.env.pass, // Use variáveis de ambiente para segurança
            },
           
        });

        const info = await transporter.sendMail({
            from: "apform@hotmail.com",
            to: toEmail,
            subject: "New message from Apform",
            text: ``,
            html:`<h2>${subject}</h2>
<p>SENDER BY: ${name} - ${senderMail}</p>

<p>${message}</p>

<p>MAIL SENDED BY APFORM SENDER API</p>
            `
        });

        return { error: false, info };
    } catch (error) {
        return { error: true, message: error.message };
    }
}

module.exports = {
    sendEmail
}