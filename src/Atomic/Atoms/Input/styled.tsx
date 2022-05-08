import styled from "styled-components/native";
import { InputTextProps } from "./Models";

export const TextInput = styled.TextInput<InputTextProps>`
color: ${({color})=>color ? color : '#fc0000'};
padding: ${({padding})=>padding ? padding : '2px'};
`