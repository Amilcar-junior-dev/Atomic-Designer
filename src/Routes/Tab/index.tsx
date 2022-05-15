import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../../Pages/Home';
import Favorits from '../../Pages/Favorits';

import { TabBar } from '../../Components';

import House from 'react-native-vector-icons/Feather'
import Heart from 'react-native-vector-icons/Feather'
const { Navigator, Screen } = createBottomTabNavigator();

export default function () {
    return (
        <Navigator 
        tabBar={ () => (<TabBar/>) }>
            
            <Screen
                name='Home' component={Home}
                options={{
                    tabBarIcon:({color,size})=>{
                        return <House name='home' color={color}size={size} />
                    },
                    headerShown: false,

                }}/>
            <Screen
                name='Favorit' component={Favorits}
                options={{
                    tabBarIcon:({color,size})=>{
                        return <Heart name='heart' color={color}size={size} />
                    },
                    headerShown: false,

                }}/>
        </Navigator>
    )
}