import React from 'react';
import { InputTextProps } from './Models';
import { TextInput } from './styled';

export const Input: React.FC<InputTextProps> = ({
    placeholder,
    onChangeText,
    value,
    description,
    color

}) => {
    return (
        <TextInput
           placeholder={placeholder}
           onChangeText={onChangeText}
           value={value}
           description={description}
           color={color}
        >

        </TextInput>
    )

}