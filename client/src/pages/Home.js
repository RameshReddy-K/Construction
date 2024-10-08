// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Optional: import a CSS file for styling

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Builder Application</h1>
            <p>This application helps users and contractors connect for building projects.</p>
            <div className="button-container">
                <Link to="/login" className="button">Login</Link>
                <Link to="/user-registration" className="button">User Registration</Link>
                <Link to="/contractor-registration" className="button">Contractor Registration</Link>
            </div>
        </div>
    );
};

export default Home;
