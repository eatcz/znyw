
interface Dept {
    id: number
    name: string
}

interface Jobs{
    enabled: boolean
    jobSort:number
    name:string
}

interface Roles {
    dataScope: string
    id: number
    level: number
    name: string
}

// User
export interface UserData {
    avatarName: string
    avatarPath: string
    createTime: string
    dept: Dept
    email: string
    enabled: boolean
    gender: string
    id: number
    jobs: Array<Jobs> |[]
    leader: boolean
    nickName: string
    phone: string
    pwdResetTime: string
    updateBy: string
    roles: Array<Roles> | []
    updateTime: string
    username: string
}



export interface RuleForm{
    id?:null|number | string
    dept: {
        deptSort?: number
        enabled?: boolean
        name: string
        pid:number
    }
    email: string
    enabled: boolean
    gender: string
    jobs: {
        enabled: boolean
        jobSort: number
        name:string
    }
    leader: boolean
    nickName:string
    password:string
    phone: number | string
    roles: {
        dataScope: string
        description: string
        level:number
    }
    username:string
}