export interface PropsFavorit {
    title?: string
    nameUser: string
    messageUser?: string
    movies?: string
    series?: string
    data?: PropsData[]
    filme?: PropsFilme[]
    onPress?: ()=> any 
    value?: any
}
 
interface PropsData{
    id: number
    image: any
}
interface PropsFilme{
    id: number
    image: any
}