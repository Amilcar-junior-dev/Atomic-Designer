import React, { useState} from 'react';
import View from './view';
import {data} from './data';
import { useNavigation } from '@react-navigation/native';
import { PropsData } from './Models';


const TabBar:React.FC<PropsData> =({
    
})=>{
    const [item, setItem]=useState(data);
    const [isActive, setIsActive]=useState(data[0].id);

    const navigation = useNavigation()

    const onPress=(item:any)=>{

        navigation.navigate(item.screenKey)
        setIsActive(item.id)
    }
    return(
        <View 
        data={item}
        isaActive={isActive}
        onPress={onPress}/>
    )
}
export default TabBar;