// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1>Builder App</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/user-registration">User Registration</Link>
                    </li>
                    <li>
                        <Link to="/contractor-registration">Contractor Registration</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
