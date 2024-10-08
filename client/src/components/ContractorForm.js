import React, { useState } from 'react';
import './ContractorForm.css'; // Importing a CSS file for styling

const ContractorForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle contractor registration logic here
        console.log('Company Name:', companyName);
        console.log('License Number:', licenseNumber);
        console.log('Contact Person:', contactPerson);
        console.log('Email:', email);
        // Add your contractor registration logic here (e.g., API call)
    };

    return (
        <form className="contractor-form" onSubmit={handleSubmit}>
            <h2>Contractor Registration</h2>
            <div className="form-group">
                <label htmlFor="companyName">Company Name:</label>
                <input 
                    type="text" 
                    id="companyName" 
                    value={companyName} 
                    onChange={(e) => setCompanyName(e.target.value)} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="licenseNumber">License Number:</label>
                <input 
                    type="text" 
                    id="licenseNumber" 
                    value={licenseNumber} 
                    onChange={(e) => setLicenseNumber(e.target.value)} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="contactPerson">Contact Person:</label>
                <input 
                    type="text" 
                    id="contactPerson" 
                    value={contactPerson} 
                    onChange={(e) => setContactPerson(e.target.value)} 
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
            <button type="submit">Register</button>
        </form>
    );
};

export default ContractorForm;
