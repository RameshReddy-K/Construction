// src/pages/ContractorHome.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContractorHome.css'; // Optional: import a CSS file for styling

const ContractorHome = () => {
    return (
        <div className="contractor-home">
            <h2>Contractor Dashboard</h2>
            <nav>
                <ul>
                    <li><Link to="/contractor/bids">View My Bids</Link></li>
                    <li><Link to="/contractor/profile">Edit Profile</Link></li>
                </ul>
            </nav>
            <p>Welcome to the Contractor Dashboard! Here you can manage your bids and update your profile.</p>
        </div>
    );
};

export default ContractorHome;
