export interface Roles {
    dataScope: string
    description:string
}

export interface Jobs{
    enabled: boolean
    jobSort: number
    name:string
}

export interface Dept {
    deptSort:number
    enabled:boolean
    name:string
    pid:number
    roles:Roles
}



export interface Resources {
    dept?: Dept
    email?: string
    enabled?: boolean
    gender: string
    jobs:Array<Jobs>
    leader: boolean
    nickName: string
    password: string
    phone: number
    username: string
    roles:Array<Roles>
}