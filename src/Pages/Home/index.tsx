import React from 'react';
import { PropsHome } from './Models';
import View from './View'
const Home:React.FC<PropsHome> =({
})=>{
    const data = [
        {
            id:1,
            image: require('../../Assets/Home/Histore/people1.png'),
            title: 'pessoa 1 '
        },
        {
            id:2,
            image: require('../../Assets/Home/Histore/people2.jpeg'),
            title: 'pessoa 1 '
        },
        {
            id:3,
            image: require('../../Assets/Home/Histore/people3.webp'),
            title: 'pessoa 1 '
        },
        {
            id:4,
            image: require('../../Assets/Home/Histore/people4.png'),
            title: 'pessoa 1 '
        },
        {
            id:5,
            image: require('../../Assets/Home/Histore/people5.jpeg'),
            title: 'pessoa 1 '
        },
        {
            id:6,
            image: require('../../Assets/Home/Histore/people6.jpeg'),
            title: 'pessoa 1 '
        }
    ]
    return(
        <View
        data={data}
        />
    )
}
export default Home;