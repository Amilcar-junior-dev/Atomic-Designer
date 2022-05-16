export interface PropsProfile {
    nameUser: string
    messageUser?: string
    data?: PropsData[]
}
 
interface PropsData{
    id: number
    image: any
}
interface PropsFilme{
    id: number
    image: any
}