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

            backgroundColor='#000000' >
            <ScrollView>
                <Box
                    marginTop='10px'
                    width='100%'
                    height='50px'
                    flexDirections='row'>
                    <Box
                        height='100%'
                        width='80%'
                        flexDirections='row'>
                        <Box
                            width='30%'
                            height='100%'
                            marginRight='5px'
                            justifyContent='center'
                            alignItems='center'>
                            <Image source={require('../../Assets/user.png')}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 75
                                }}
                                resizeMode='center' />

                        </Box>
                        <Box
                            width='100%'
                            height='100%'
                            flexDirections='column'>
                            <Text
                                fSize={15}
                                color='#fff'>
                                {messageUser}
                            </Text>
                            <Text
                                fSize={20}
                                color='#fff'>
                                {nameUser}
                            </Text>

                        </Box>


                    </Box>
                    <Box
                        backgroundColor='#ffffff68'
                        height='80%'
                        width='10%'
                        borderRadius='10px'
                        alignItems='center'
                        justifyContent='center'>
                        <Icon
                            name='notifications' size={25} color='#eeff00b5' />
                    </Box>
                </Box>
                <Box
                    marginTop='50px'
                    marginBottom='15px'
                    height='30px'
                    borderRadius='8px'
                    flexDirections='row'
                    justifyContent='space-between'
                    backgroundColor='#8381813c'>
                    <BoxTouch
                        width='50%'
                        height='100%'
                        alignItems='center'
                        justifyContent='center'
                        onPress={onPress}>
                        <Text
                            fSize={15}
                            fWeight='bold'
                            color='#fff'>
                            {movies}
                        </Text>
                    </BoxTouch>

                    <BoxTouch
                        width='50%'
                        height='100%'
                        alignItems='center'
                        justifyContent='center'
                        onPress={onPress}>
                        <Text
                            fSize={15}
                            fWeight='bold'
                            color='#fff'>
                            {series}
                        </Text>
                    </BoxTouch>
                </Box>

               
                <ContainerScrollHorizontall
                >

                    {data.map((item, index) => (
                        <Box
                            key={index}
                            height='90%'
                            width='150px'
                            marginLeft='10px'
                            borderRadius='10px'>
                            <Image source={item.image}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 10
                                }} />
                        </Box>
                    ))}
                </ContainerScrollHorizontall>
                <Box
                    marginTop='15px'
                    marginBottom='5px'
                    height='20px'
                    justifyContent='center'
                    marginLeft='10px'
                    alignItems='flex-start'>
                    <Text
                        fSize={15}
                        color='#fff'
                        fWeight='bold'>
                            {title}
                    </Text>
                </Box>

                <ContainerScrollHorizontall>
                    {filme.map((item, index) => (
                        <Box
                            key={index}
                            height='90%'
                            width='150px'
                            marginLeft='10px'
                            borderRadius='10px'>
                            <Image source={item.image}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 10
                                }} />
                        </Box>
                    ))}
                </ContainerScrollHorizontall>
            </ScrollView>
        </BoxContainer>


    )
}
export default Favorits;