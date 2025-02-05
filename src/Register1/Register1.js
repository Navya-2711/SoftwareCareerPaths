import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase'; // Firebase Authentication
import './Register.css'; // Import the CSS file for styling

export default function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "", username: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Create the user with email and password, and save the username in your database
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            
            // You can save the username in your database here (Firebase Firestore or Realtime Database)
            // For example: firestore.collection("users").doc(auth.currentUser.uid).set({ username: formData.username });
            
            navigate("/home"); // Navigate to home page after successful registration
        } catch (err) {
            setError("Error during registration. Please try again.");
        }
    };

    return (
        <div className="register-container">
            {/* Left side - Image */}
            <div className="left1">
                <img src=" https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg" alt="Placeholder Image" className="image" />
            </div>

            {/* Right side - Registration Form */}
            <div className="right1">
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        required 
                        placeholder="Enter your username" 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        placeholder="Enter your email" 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                        placeholder="Enter your password" 
                    />
                    <button className='regbtn' type="submit">Submit</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
}
