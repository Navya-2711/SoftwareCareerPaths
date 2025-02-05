import React, { useState } from 'react';
import './Contact.css';
import Navbar1 from '../Navbar1/Navbar1';
// Replace with your image path

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Call the function to send the message via EmailJS or any other service
        sendMessage(formData);
    };

    const sendMessage = async (data) => {
        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: 'service_zzki68u', // Your EmailJS service ID
                    template_id: 'template_rbbbeuq', // Your EmailJS template ID
                    user_id: 'W472A0ArkfdaOHmEf', // Your EmailJS user ID
                    template_params: {
                        fullName: data.fullName,
                        email: data.email,
                        message: data.message,
                    },
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error('Error sending email:', response);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Navbar1/>
            <div className="contact-form-container">
                <div className="contact-card">
                    
                    <div className="contact-form">
                        <h2>Contact Us</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                        {isSubmitted && <p className="success-message">Message Sent Successfully!</p>}
                    </div>
                </div>
            </div>
    </>
);
}
