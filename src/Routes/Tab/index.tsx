import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../../Pages/Home';
//import Favorits from '../../Pages/Favorits';

import { TabBar } from '../../Components';

import House from 'react-native-vector-icons/FontAwesome5'
import User from 'react-native-vector-icons/FontAwesome'
const Tab = createBottomTabNavigator();

export default function () {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false ,
                tabBarStyle:{
                    position:'absolute',
                    left:15,
                    right: 15,
                    bottom: 15,
                    borderRadius: 10,
                    backgroundColor: '#4d0000',
                    elevation:2,
                    shadowColor: '#ffffff',
                    shadowOpacity: 0.25,
                    shadowRadius: 10,
                }
            }}>
            
            <Tab.Screen
                      
                name='Home' component={Home}
                options={{
                    tabBarIcon:({focused})=>{
                        return <House name='home' size={30} style={{
                            color: focused ? '#ffd900' :'#000000dd'
                        }} />
                        
                    },
                    headerShown: false,
                }}/>
           
        </Tab.Navigator>
    )
}

/*  <Tab.Screen
                name='Favorit' component={Favorits}
                options={{
                    tabBarIcon:({focused})=>{
                        return <User name='user' size={30} 
                        style={{
                            color: focused ? '#ffd900' :'#000000dd'
                        }}/>
                    },
                    headerShown: false,

                }}/>

                */