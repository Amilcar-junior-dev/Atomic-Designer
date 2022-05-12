import React from 'react';
import { PropsHome } from './Models';
import View from './View'
const Home:React.FC<PropsHome> =({
    
})=>{
    const data = [
        {
            id: 1,
            image: require('../../Assets/vingadoresUltimato.jpg')
        },
        {
            id: 2,
            image: require('../../Assets/doutorEstranho.jpeg')
        },
        {
            id: 3,
            image: require('../../Assets/hulk.jpeg')
        }, 
        {
            id: 1,
            image: require('../../Assets/interestelar.jpeg')
        },
        {
            id: 2,
            image: require('../../Assets/alien.jpg')
        },

    ]

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
    ]
    return(
        <View
            nameUser='User 1'
            messageUser='Hello'
            movies='Movies'
            series='Series'
            title='Recent Watched'
            data={data}
            filme={filme}
        />
    )
}
export default Home;