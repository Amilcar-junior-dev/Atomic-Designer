import React, { createContext, useState, useEffect } from 'react';
import api from '../Utils/axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [value, setValue] = useState([])
    

    useEffect(() => {

        async function getResponse() {

            try {
                const response = await api.get('shows')
                setValue(response.data)
                await AsyncStorage.setItem('saveValue', JSON.stringify(response.data ));

            } catch (error) {
               const resValue = await AsyncStorage.getItem('saveValue')
              setValue(JSON.parse(resValue))
               

            }
        }
        getResponse();

    }, [])
    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;




