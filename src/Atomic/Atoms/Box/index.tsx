import styled from 'styled-components/native'

import { ContainerProps, BoxTopProps, BoxInputProps, BoxProps } from './Models'

export const Container = styled.View<ContainerProps>`
flex: 1;
background-color:${({ backgroundColor }) => backgroundColor ? backgroundColor : '#7c7c7c'};
padding:${({ padding }) => padding ? padding : '10px'};
`
export const BoxTop = styled.View<BoxTopProps>`
flex-direction: ${({ flexDirections }) => flexDirections ? flexDirections : 'column'};
justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'flex-start'};
align-items: ${({ alignItems }) => alignItems ? alignItems : 'flex-start'};
width:${({ width }) => width ? width : '100%'};
height:${({ heigth }) => heigth ? heigth : '20px'};
background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : null};
margin-top: ${({ marginTop }) => marginTop ? marginTop : '5px'};
margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : '5px'};
margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : '5px'};
margin-right: ${({ marginRight }) => marginRight ? marginRight : '5px'};
`

export const BoxInput = styled.View<BoxInputProps>`
width:${({ width }) => width ? width : '100%'};
height:${({ heigth }) => heigth ? heigth : '20px'};
padding: ${({ padding }) => padding ? padding : 0}px;
align-items: ${({ alignItems }) => alignItems ? alignItems : 'flex-start'};
justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'flex-start'};
background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#fff'};
margin-top: ${({ marginTop }) => marginTop ? marginTop : '10px'};
`
export const Box = styled.View<BoxProps>`
    width:${({ width }) => width ? width : '100%'};
height:${({ heigth }) => heigth ? heigth : '10px'};
padding:${({ pd }) => pd ? pd : 0}px;
align-items: ${({ alignItems }) => alignItems ? alignItems : 'flex-start'};
justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'flex-start'};
background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : null};
margin-top: ${({ marginTop }) => marginTop ? marginTop : '0px'};
margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : '0px'};
margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : '0px'};
margin-right: ${({ marginRight }) => marginRight ? marginRight : '0px'};
border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '0px'};
border-color: ${({ borderColor }) => borderColor ? borderColor : null};
border-width: ${({ borderWidth }) => borderWidth ? borderWidth : '0px'};
position:${({ position }) => position ? position : 'relative'} ;
flex-direction: ${({ flexDirections }) => flexDirections ? flexDirections : 'column'};
`