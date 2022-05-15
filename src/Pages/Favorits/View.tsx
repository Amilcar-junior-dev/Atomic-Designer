import React from 'react';
import { ScrollView, View } from 'react-native';
import { BoxContainer, BoxTouch, Box } from '../../Atomic/Atoms/Box';
import BoxShadow from '../../Atomic/Atoms/Box/shadow'
import { Text } from '../../Atomic/Atoms/Text'
import { Image } from '../../Atomic/Image';

import { ContainerScrollHorizontall } from '../../Atomic/Moleculs/ContainerScrollHorizontal'

import { PropsHome } from './Models';

import Icon from 'react-native-vector-icons/Ionicons'




const Favorits: React.FC<PropsHome> = ({
    nameUser,
    messageUser,
    movies,
    series,
    onPress,
    data,
    filme,
    title,

}) => {
    return (

        <BoxContainer
            alignItems='center'
            justifyContent='center'
            backgroundColor='#ffffff' >
            <ScrollView>
                <BoxShadow
                backgroundColor='#fe5555'
                shadow='10px -1px 10px  #00000090'
                height='200px'
                width='200px'>

                </BoxShadow>
            </ScrollView>
        </BoxContainer>
    )
}
export default Favorits;