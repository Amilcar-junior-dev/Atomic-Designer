export interface PropsHome {
    title?: string
    nameUser: string
    messageUser?: string
    movies?: string
    series?: string
    data?: PropsData[]
    filme?: PropsFilme[]
    onPress?: ()=> any 
    value?: any
    text?: any
    setText?: any
    resp?: any
    searchMovies?:()=>any
}
 
interface PropsData{
    id: number
    image: any
}
interface PropsFilme{
    id: number
    image: any
}

interface PropsResp{
    id?: number
    image?: any
    name?: string
    score?: string
}