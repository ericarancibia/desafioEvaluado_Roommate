import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS
    }
});

export const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: process.env.USER_EMAIL,
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error al enviar Email:', error);
        } else {
            console.log('Email Enviado:', info.response);
        }
    });
};