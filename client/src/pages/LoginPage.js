// src/pages/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css'; // Optional: import a CSS file for styling

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('user');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Simulate a login API call
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, userType }),
        });

        if (response.ok) {
            // Redirect based on user type
            if (userType === 'user') {
                navigate('/user-home');
            } else if (userType === 'contractor') {
                navigate('/contractor-home');
            } else {
                navigate('/admin-home');
            }
        } else {
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
                    <option value="user">User</option>
                    <option value="contractor">Contractor</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
