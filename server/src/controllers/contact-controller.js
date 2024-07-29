

import Contact from '../models/contact-model.js';

import { sendEmail } from '../services/emailService.js';
 
const contactForm = async (req, res) => {

    try {

        const response = req.body;
 
        // Save the contact message to the database

        await Contact.create(response);
 
        // Send an email to the contact person

        const { username, email, phone, message } = response;

        const emailSubject = `New Contact Form Submission from ${username}`;

        const emailText = `

            You have a new message from your website contact form.
 
            Name: ${username}

            Email: ${email}

            Phone: ${phone}

            Message: ${message}

        `;
 
        // Replace 'contact@example.com' with the recipient's email address

        await sendEmail('pranjal@sphereoutsourcing.ca', emailSubject, emailText);
 
        return res.status(200).json({ message: 'Message sent successfully' });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Message could not be delivered' });

    }

};
 
export default contactForm;

 