// src/pages/AdminHome.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminHome.css'; // Optional: import a CSS file for styling

const AdminHome = () => {
    return (
        <div className="admin-home">
            <h2>Admin Dashboard</h2>
            <nav>
                <ul>
                    <li><Link to="/admin/users">Manage Users</Link></li>
                    <li><Link to="/admin/contractors">Manage Contractors</Link></li>
                    <li><Link to="/admin/bids">View Bids</Link></li>
                </ul>
            </nav>
            <p>Welcome to the Admin Dashboard! Here you can manage users, contractors, and view bids.</p>
        </div>
    );
};

export default AdminHome;
