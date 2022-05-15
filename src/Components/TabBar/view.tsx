import React from 'react';
import { Tab, TouchableOpacity, Icon } from './styled';


const TabBar =({data, isActive, onPress})=>{
    return(
        <Tab>
            {data.map((item, index)=>(
                <TouchableOpacity onPress={()=>onPress(item)} key={index}>
                    <Icon source={(item.icon)} width={0.1} height={0.1} />              
                </TouchableOpacity>
            ))}
        </Tab>
    )
}
export default TabBar;