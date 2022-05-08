export interface InputTextPropsIOS{
    
}
export interface InputTextPropsAndroid{

}

export interface InputTextProps extends  InputTextPropsIOS{
placeholder?: string
value?: any 
description?: string | any
onChangeText: (value: any) => void 
color?: string
padding?: string | number

}