import React from 'react';
import { Container } from '../../Atomic/Atoms/Box/styledLinear';
import { Text } from '../../Atomic/Atoms/Text';
import { Box } from '../../Atomic/Atoms/Box';
import { Image } from '../../Atomic/Image'
import { PropsProfile } from './Models';


const Profile: React.FC<PropsProfile> = ({
    nameUser,
    messageUser,
}) => {
    return (
        <Container colors={['#000000', '#37393e', '#000000']}>
            <Box
                marginTop='10px'
                height='130px'
                alignItems='center'>
                <Image source={require('../../Assets/user.png')}
                    style={{
                        width: 70,
                        height: 70,
                        borderRadius: 75
                    }}
                    resizeMode='center' />
                <Box
                    height='30px'
                    alignItems='center'>
                    <Text
                        fSize={20}
                        fWeight='bold'
                        color='#fff'>
                        {nameUser}
                    </Text>

                    <Text
                        fSize={15}
                        color='#fff'>
                        {messageUser}
                    </Text>

                </Box>

            </Box>
        </Container>
    );
};
export default Profile;