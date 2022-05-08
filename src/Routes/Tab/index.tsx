import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../../Pages/Home';
const { Navigator, Screen } = createBottomTabNavigator();

export default function () {
    return (
        <Navigator >
            <Screen
                name='Home' component={Home}
                options={{
                   
                    headerShown: false,

                }}
            />
        </Navigator>
    )
}