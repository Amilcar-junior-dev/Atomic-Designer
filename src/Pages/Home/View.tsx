import React, { Children } from 'react';
import { ScrollView, TextInput } from 'react-native';

import theme from '../../Style/theme';
import ThemeDefault from '../../Style/themeDefault';
import { BoxTouch, Box, BoxShadow } from '../../Atomic/Atoms/Box';
import { Container } from '../../Atomic/Atoms/Box/styledLinear';
import { Text } from '../../Atomic/Atoms/Text'
import { Image } from '../../Atomic/Image';
import { ContainerScrollHorizontall } from '../../Atomic/Moleculs/ContainerScrollHorizontal';
import { PropsHome } from './Models';

import Icon from 'react-native-vector-icons/Ionicons'
import Circle from 'react-native-vector-icons/FontAwesome'
import Lupa from 'react-native-vector-icons/Entypo'

const Home: React.FC<PropsHome> = ({
    nameUser,
    messageUser,
    filme,
    movies,
    title,
    value,
    onPress,
    text,
    setText,
    resp,
    searchMovies,
}) => {
    const {colors} = theme
    const {fontSize} = ThemeDefault
    return (
        <Container colors={['#000000', '#37393e', '#000000']}>
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
                                fSize={fontSize.normal}
                                color={colors.COLOR_PRYMARY_WHITE_BASE_01}>
                                {messageUser}
                            </Text>
                            <Text
                                fSize={fontSize.xbig}
                                color={colors.COLOR_PRYMARY_WHITE_BASE_01}>
                                {nameUser}
                            </Text>

                        </Box>
                    </Box>
                    <Box
                        backgroundColor={colors.COLOR_PRYMARY_GREY_BASE_05}
                        height='80%'
                        width='10%'
                        borderRadius='10px'
                        alignItems='center'
                        justifyContent='center'>
                        <Icon
                            name='notifications-outline' size={20} color={colors.COLOR_PRYMARY_YELLOW_BASE_01} />
                    </Box>
                </Box>

                <Box
                    height='40px'
                    alignItems='flex-end'>
                    <Box
                        height='100%'
                        width='70%'
                        backgroundColor={colors.COLOR_PRYMARY_WHITE_BASE_01}
                        marginRight='5px'
                        flexDirections='row'
                        justifyContent='space-between'
                        borderRadiusTopLeft='5px'
                        borderRadiusTopRight='5px'
                        borderRadiusBottomLeft='5px'
                        borderRadiusBottomRight='5px'>
                        <TextInput
                            value={text}
                            onChangeText={(text) => setText(text)} />
                        <BoxTouch
                            onPress={searchMovies}
                            height='100%'
                            width='20%'
                            borderRadiusTopRight='5px'
                            borderRadiusBottomRight='5px'
                            backgroundColor={colors.COLOR_PRYMARY_YELLOW_BASE_01}
                            alignItems='center'
                            justifyContent='center'>

                            <Lupa name='magnifying-glass' size={20} color={colors.COLOR_PRYMARY_BLACK_BASE_01} />

                        </BoxTouch>
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
                        fSize={fontSize.normal}
                        color={colors.COLOR_PRYMARY_WHITE_BASE_01}
                        fWeight='bold'>
                        {movies}
                    </Text>
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
                            }} />
                            <Box alignItems='center' height='100%' >
                                <Text fSize={fontSize.normal} fWeight='bold' color={colors.COLOR_PRYMARY_RED_BASE_01}>
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
                        fSize={fontSize.normal}
                        color={colors.COLOR_PRYMARY_GREY_BASE_05}>
                        Episódio 1
                    </Text>
                    <Text
                        fSize={fontSize.xxxbig}
                        fWeight='bold'
                        color={colors.COLOR_PRYMARY_WHITE_BASE_01}>
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
                            <Circle name='circle' size={10} color={colors.COLOR_PRYMARY_GREY_BASE_04} />
                        </Box>

                        <Box
                            width='15px'>
                            <Circle name='circle' size={10} color={colors.COLOR_PRYMARY_WHITE_BASE_01} />
                        </Box>

                        <Box
                            width='15px'>
                            <Circle name='circle' size={10} color={colors.COLOR_PRYMARY_GREY_BASE_04} />
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
                        fSize={fontSize.normal}
                        color={colors.COLOR_PRYMARY_WHITE_BASE_01}
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
                <Box  height='500px' backgroundColor='#fff'alignItems='center'justifyContent='center'>

                    <BoxShadow type='level5' height='200px' width='300px' >
                        <Box height='200px' width='300px' backgroundColor='#525151'>

                        </Box>

                    </BoxShadow>

                </Box>


            </ScrollView>
        </Container>
    )
}
export default Home;