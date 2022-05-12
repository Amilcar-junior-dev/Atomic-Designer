import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../../Pages/Home';
import Icon from 'react-native-vector-icons/Feather'
const { Navigator, Screen } = createBottomTabNavigator();

export default function () {
    return (
        <Navigator >
            <Screen
                name='Home' component={Home}
                options={{
                    tabBarIcon:({color,size})=>{
                        return <Icon name='home' color={color}size={size} />
                    },
                    headerShown: false,

                }}
            />
        </Navigator>
    )
}