export interface PropsHome {
    title?: string
    nameUser: string
    messageUser?: string
    movies?: string
    series?: string
    data?: PropsData[]
    filme?: PropsFilme[]
    onPress?: ()=> any 
}
 
interface PropsData{
    id: number
    image: any
}
interface PropsFilme{
    id: number
    image: any
}