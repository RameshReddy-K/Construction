import React, { useState } from 'react';
import './UserForm.css'; // Importing a CSS file for styling

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle user registration logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        // Add your user registration logic here (e.g., API call)
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <h2>User Registration</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input 
                    type="tel" 
                    id="phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default UserForm;
