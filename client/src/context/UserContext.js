// src/context/UserContext.js

import React, { createContext, useContext, useState } from 'react';

// Create UserContext
const UserContext = createContext();

// UserProvider component
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    const updateUserData = (data) => {
        setUserData(data);
    };

    return (
        <UserContext.Provider value={{ userData, updateUserData }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use UserContext
export const useUser = () => {
    return useContext(UserContext);
};
