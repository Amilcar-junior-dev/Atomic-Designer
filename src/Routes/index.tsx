import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from '../Context/auth';

import Routes from './Tab';

export default function () {
    return (
        <NavigationContainer>
            <AuthProvider>
                 <Routes />
            </AuthProvider>
        </NavigationContainer>
    )
}