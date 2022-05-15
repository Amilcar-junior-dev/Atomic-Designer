import React from 'react';
import { Container } from '../../Atomic/Atoms/Box/styledLinear';
import { Text } from '../../Atomic/Atoms/Text';
import { Box } from '../../Atomic/Atoms/Box';


const Favorit = () => {
    return (
        <Container colors={['#000000', '#37393e', '#000000']}>
            <Box
                height='300px'
                alignItems='center'>
                <Text
                    color='#fff'
                    fSize={50}>
                    FAVORIT
                </Text>
            </Box>
        </Container>
    );
};
export default Favorit;