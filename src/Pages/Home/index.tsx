import React, { useContext, useState } from 'react';
import { PropsHome } from './Models';
import View from './View'
import { AuthContext } from '../../Context/auth';
const Home: React.FC<PropsHome> = ({

}) => {
    const value = useContext(AuthContext)
    const filme = [
        {
            id: 1,
            image: require('../../Assets/afterEather.jpeg')
        },
        {
            id: 2,
            image: require('../../Assets/circuloDeFogo.jpeg')
        },
        {
            id: 3,
            image: require('../../Assets/TerraParou.jpeg')
        },
        {
            id: 4,
            image: require('../../Assets/transformers.webp')
        },
        {
            id: 5,
            image: require('../../Assets/velosesFuriosos.jpeg')
        },
        {
            id: 6,
            image: require('../../Assets/doutorEstranho.jpeg')
        },
        {
            id: 7,
            image: require('../../Assets/hulk.jpeg')
        },
        {
            id: 8,
            image: require('../../Assets/interestelar.jpeg')
        },
        {
            id: 9,
            image: require('../../Assets/alien.jpg')
        },

    ]
    return (
        <View
            nameUser='User 1'
            messageUser='Hello'
            movies='Sugestions'
            series='Series'
            title='Recent Watched'
            filme={filme}
            value={value}
        />
    )
}
export default Home;