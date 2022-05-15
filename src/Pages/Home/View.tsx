import React, { useContext } from 'react';
import { ScrollView, } from 'react-native';
import { BoxTouch, Box } from '../../Atomic/Atoms/Box';
import { Container } from '../../Atomic/Atoms/Box/styledLinear';
import BoxShadow from '../../Atomic/Atoms/Box/shadow'
import { Text } from '../../Atomic/Atoms/Text'
import { Image } from '../../Atomic/Image';
import { ContainerScrollHorizontall } from '../../Atomic/Moleculs/ContainerScrollHorizontal';
import { PropsHome } from './Models';

import Icon from 'react-native-vector-icons/Ionicons'
import Circle from 'react-native-vector-icons/FontAwesome'

const Home: React.FC<PropsHome> = ({
    nameUser,
    messageUser,
    movies,
    series,
    onPress,
    filme,
    title,
    value,
}) => {
    return (
        <Container style={{ flex: 1 }} colors={['#000000', '#37393e', '#000000']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box
                marginBottom='30px'
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
                                { messageUser}
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
                            name='notifications-outline' size={20} color='#eeff00b5' />
                    </Box>
                </Box>
             

                <ContainerScrollHorizontall >
                    {value?.map((item, index) => (
                        <Box
                            key={index}
                            height='90%'
                            alignItems='center'
                            width='150px'
                            marginLeft='10px'
                            borderRadius='10px'>
                            <Image source={{ uri: item.image.medium }} style={{
                                width: '80%',
                                height: '100%',
                                borderRadius: 10
                            }}/>
                            <Box alignItems='center' height='100%' >
                                <Text fSize={15} fWeight='bold' color='#ff0000'>
                                    {item.name}
                                </Text>
                            </Box>

                        </Box>
                    ))}
                </ContainerScrollHorizontall>

                <Box
                    height='80px'
                    alignItems='center'>
                    <Text
                        fSize={15}
                        color='#ffffff68'>
                        Episódio 1
                    </Text>
                    <Text
                        fSize={25}
                        fWeight='bold'
                        color='#ffffff'>
                        THE 100
                    </Text>

                    <Box
                        flexDirections='row'
                        alignItems='center'
                        justifyContent='center'
                        width='90px'
                        height='15px'>
                        <Box
                            width='15px'>
                            <Circle name='circle' size={10} color='#ffffff6a' />
                        </Box>

                        <Box
                            width='15px'>
                            <Circle name='circle' size={10} color='#ffffff' />
                        </Box>

                        <Box
                            width='15px'>
                            <Circle name='circle' size={10} color='#ffffff6a' />
                        </Box>
                    </Box>
                </Box>

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
        </Container>
    )
}
export default Home;