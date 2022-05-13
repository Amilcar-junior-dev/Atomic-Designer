import React from 'react';
import { ScrollView } from 'react-native';

import { PropsContainerScrollHorizontal } from './Models';
import { Box, BoxShadow } from '../../Atoms/Box';
import { Image } from '../../Image'
import { Text } from '../../Atoms/Text'

export const ViewContainerScrollHorizontal: React.FC<PropsContainerScrollHorizontal> = ({
    title,
    data,
    filme,
    children
}) => {
    return (
        <Box
            height='200px'
            marginBottom='20px'
            justifyContent='center'>
            <Box backgroundColor='transparent'
                height='100%'>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {children}
                </ScrollView>
            </Box>
        </Box>
    )
}
