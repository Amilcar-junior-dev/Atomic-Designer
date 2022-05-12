
export interface ContainerProps {
    width?: string | number
    heigth?: string | number
    padding?: string | number
    alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-end' | 'baseline'
    justifyContent?: 'baseline' | 'center' | 'flex-end'|'flex-start'
    flexDirections?: 'row' | 'column' | 'row-reverse' |'column-reverse'
    backgroundColor?: string
}

export interface BoxTopProps {
    width?: string | number
    heigth?: string | number
    padding?: string | number
    alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-end' | 'baseline'
    justifyContent?: 'baseline' | 'center' | 'flex-end'|'flex-start' | 'space-around' | 'space-between'
    flexDirections?: 'row' | 'column' | 'row-reverse' |'column-reverse'
    backgroundColor?: string
    marginBottom?: string | number 
    marginTop?: string | number 
    marginLeft?: string | number
    marginRight?: string | number
    
}

export interface BoxInputProps {
    width?: string | number
    height?: string | number 
    padding?: string | number 
    alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-start' | 'flex-end' | 'baseline'
    justifyContent?: 'baseline' | 'center' | 'flex-end'|'flex-start' | 'space-around' | 'space-between'
    color?: string
    backgroundColor?: string;
    marginBottom?: string | number 
    marginTop?: string | number 

}

export interface BoxProps {
    width?: string | number
    height?: string | number 
    pd?: number 
    alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-start' | 'flex-end' | 'baseline'
    justifyContent?: 'baseline' | 'center' | 'flex-end'|'flex-start' | 'space-around' | 'space-between'
    backgroundColor?: string;
    marginBottom?: string | number 
    marginTop?: string | number 
    marginLeft?: string | number
    marginRight?: string | number 
    borderRadius?: string | number
    borderColor?: string 
    borderWidth?: string
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
    flexDirections?: 'row' | 'column' | 'row-reverse' |'column-reverse'
}

export interface PropsBoxTouch{
    width?: string | number
    height?: string | number
    pd?: number
    alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-start' | 'flex-end' | 'baseline'
    justifyContent?: 'baseline' | 'center' | 'flex-end'|'flex-start' | 'space-around' | 'space-between'
    backgroundColor?: string;
    marginBottom?: string | number 
    marginTop?: string | number 
    marginLeft?: string | number
    marginRight?: string | number 
    borderRadius?: string | number
    borderColor?: string 
    borderWidth?: string
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
    flexDirection?: 'row' | 'column' | 'row-reverse' |'column-reverse'
    onPress: ()=> any
}

export interface PropsBoxShadow{
    width?: string | number
    height?: string | number
    pd?: number
    alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-start' | 'flex-end' | 'baseline'
    justifyContent?: 'baseline' | 'center' | 'flex-end'|'flex-start' | 'space-around' | 'space-between'
    backgroundColor?: string;
    marginBottom?: string | number 
    marginTop?: string | number 
    marginLeft?: string | number
    marginRight?: string | number 
    borderRadius?: string | number
    borderColor?: string 
    borderWidth?: string
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
    flexDirection?: 'row' | 'column' | 'row-reverse' |'column-reverse'
    shadow: string
    children?: any
    index?: number
}