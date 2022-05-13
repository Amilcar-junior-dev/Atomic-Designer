
export interface PropsContainerScrollHorizontal {
    title?: string
    data?: PropsDataContainerScroll[]
    filme?: PropsFilmesContainerScroll[]
    children?: any
    marginTop?: string | number
    marginBottom?: string | number
    marginLeft?: string | number
    margimRight?: string | number 
}
 
export interface PropsDataContainerScroll{
    id: number
    name?: string
    image?: any
}
export interface PropsFilmesContainerScroll{
    id: number
    name?: string
    image?: any
}