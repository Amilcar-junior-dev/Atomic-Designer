import React from 'react';
import { ScrollView } from 'react-native';
import { Container, BoxTop, Box } from '../../Atomic/Atoms/Box';
import { Text } from '../../Atomic/Atoms/Text'
import { Image } from '../../Atomic/Image';
import { PropsHome } from './Models';


const Home: React.FC<PropsHome> = ({
    data
}) => {
    return (
        <Container
            backgroundColor='#EFEFEF'>
            <BoxTop
                marginTop='21px'
                heigth='50px'
                flexDirections='row'
                alignItems='center'
                justifyContent='space-between'>
                <BoxTop
                    width='100px'
                    heigth='100%'
                    flexDirections='row'
                    alignItems='center'>
                    <Image
                        source={require('../../Assets/Home/logo.png')}
                        style={{
                            width: 40,
                            height: 40
                        }} />
                    <Text
                        color='#000'
                        fSize={20}
                        fWeight='bold'>
                        Cykol
                    </Text>

                </BoxTop>

                <BoxTop
                    width='100px'
                    heigth='100%'
                    flexDirections='row'>
                    <Image
                        source={require('../../Assets/Home/msg.png')}
                        width={40}
                        height={40} />
                    <Image
                        source={require('../../Assets/Home/config.png')}
                        width={40}
                        height={40} />
                </BoxTop>
            </BoxTop>

            <Box
                heigth='80px'
                width='100%'
                justifyContent='center'>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {data.map((item, index) => (
                        <Box key={index}
                            width='80px'
                            heigth='100%'
                            marginRight='20px'
                            borderRadius='20px'
                            borderColor="#fa00fe"
                            borderWidth='1px'
                            alignItems='center'
                            justifyContent='center'
                            pd={6}>
                            <Image source={item.image}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                resizeMode='stretch'
                                br={16} />
                        </Box>
                    ))}
                </ScrollView>
            </Box>

            <Box
                backgroundColor='#F2EBE1'
                width='100%'
                heigth='70%'
                marginTop='10px'
                alignItems='center'
                borderRadius='20px'>
                <Box
                    marginTop='10px'
                    marginBottom='10px'
                    marginLeft='10px'
                    marginRight='10px'
                    width='90%'
                    heigth='81%'
                    borderRadius='20px'
                    position='static'>
                    <Box
                        backgroundColor='#6c6969'
                        width='100%'
                        heigth='90%'
                        borderRadius='20px'>
                        <Image source={require('../../Assets/Home/tzuyu.jpeg')}
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            br={20} />
                    </Box>

                    <Box
                        backgroundColor='#ffffff7c'
                        borderRadius='20px'
                        width='70%'
                        heigth='0px'
                        marginTop='90%'
                        position='absolute'
                        flexDirections='column'
                        justifyContent='center'
                        pd={10}>
                        <Text
                            fSize={20}
                            color='#050505'
                            fWeight='bold'>
                            Idol Championship
                        </Text>

                        <Text
                            fSize={20}
                            color='#000'
                            fWeight='bold'>
                            in 2022
                        </Text>
                    </Box>
                </Box>

                <Box
                 marginTop={'5px'}
                    heigth='30px'
                    flexDirections='row'
                    justifyContent='space-between'>
                    <Box
                        
                       
                        width='40%'
                        heigth='100%'
                        justifyContent='space-between'
                        flexDirections='row'>
                        <Image source={require('../../Assets/Home/coracaopb.png')}
                            style={{
                                width: 30,
                                height: 30,
                                marginLeft: 5
                            }} />
                        <Image
                            source={require('../../Assets/Home/carta.png')}
                            style={{
                                width: 30,
                                height: 30
                            }} />
                        <Image
                            source={require('../../Assets/Home/env.png')}
                            style={{
                                width: 30,
                                height: 30
                            }} />
                    </Box>
                    <Box
                       
                        alignItems='flex-end'
                        width='50%'
                        heigth='100%'>
                        <Image
                            source={require('../../Assets/Home/salvo.png')}
                            style={{
                                width: 30,
                                height: 30,
                                marginRight: 5
                            }}/>
                    </Box>
                </Box>
                <Box
                    marginTop='4px'
                    alignItems='flex-start'
                    heigth="30px"
                    pd={5}
                    borderRadius='6px'>
                    <Text
                        fSize={15}>
                        Tzuiu Archery Session Moment in 2021
                    </Text>
                </Box>
            </Box>

        </Container>
    )
}
export default Home;