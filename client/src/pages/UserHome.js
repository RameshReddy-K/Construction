// src/pages/UserHome.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserHome.css'; // Optional: import a CSS file for styling

const UserHome = () => {
    return (
        <div className="user-home">
            <h2>User Dashboard</h2>
            <nav>
                <ul>
                    <li><Link to="/user/contracts">View My Contracts</Link></li>
                    <li><Link to="/user/profile">Edit Profile</Link></li>
                    <li><Link to="/user/bids">Make a Bid</Link></li>
                </ul>
            </nav>
            <p>Welcome to the User Dashboard! Here you can manage your contracts, update your profile, and make bids on properties.</p>
        </div>
    );
};

export default UserHome;
