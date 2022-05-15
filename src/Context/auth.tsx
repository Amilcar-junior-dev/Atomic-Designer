import React, { createContext, useState, useEffect } from 'react';
import api from '../Utils/axios'
export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [value, setValue] = useState([])

    useEffect(() => {

        async function getResponse() {

            try {
                const response = await api.get('shows')
                setValue(response.data)

            } catch (error) {
                alert('ERROR')
            }
        }
        getResponse();

    }, [])
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;




