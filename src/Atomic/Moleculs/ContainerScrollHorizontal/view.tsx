import React from 'react';
import { ScrollView } from 'react-native';

import { PropsContainerScrollHorizontal } from './Models';
import { Box } from '../../Atoms/Box';


export const ViewContainerScrollHorizontal: React.FC<PropsContainerScrollHorizontal> = ({
    
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
