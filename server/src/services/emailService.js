import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    service: 'Gmail', // or your email service
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS  // Your email password or app-specific password

    }
});
 export const sendEmail = async (to, subject, text) => {

    const mailOptions = {

        from: process.env.EMAIL_USER, // Sender address

        to, // Recipient address

        subject, // Subject line

        text // Plain text body

    };
    try {

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};

 