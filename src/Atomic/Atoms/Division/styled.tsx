import styled from "styled-components/native";
import { PropsDivision } from "./Models";


export const Division = styled.View<PropsDivision>`
height: ${({height})=> height ? height : '1px'};
width: ${({width})=> width ? width : '100%'};
background-color: ${({backgroundColor})=> backgroundColor ? backgroundColor : '#fff'};
`