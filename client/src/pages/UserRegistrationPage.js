// src/pages/UserRegistrationPage.js

import React, { useState } from 'react';
import '../styles/UserRegistrationPage.css'; // Optional: import a CSS file for styling

const UserRegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegistration = async (e) => {
        e.preventDefault();

        // Simulate a registration API call
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }),
        });

        if (response.ok) {
            alert('Registration successful! You can now log in.');
        } else {
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div className="user-registration-page">
            <h2>User Registration</h2>
            <form onSubmit={handleRegistration}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default UserRegistrationPage;
