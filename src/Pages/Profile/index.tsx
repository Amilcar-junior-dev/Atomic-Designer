import React, { useContext, useState } from 'react';
import { PropsProfile } from './Models';
import View from './View'
import { AuthContext } from '../../Context/auth';
const Home: React.FC<PropsProfile> = ({

}) => {
 
    return (
        <View
           nameUser='user'
           messageUser='Status'
        />
    )
}
export default Home;