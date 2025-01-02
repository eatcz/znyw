
export interface Dept {
    deptSort
    enabled
    name
    pid
    roles
    dataScope
    description
    level
}

export interface Resources {
    dept?: Dept
    email?: string
    enabled?: boolean
    gender: string
    leader: boolean
    nickName: string
    password:
}