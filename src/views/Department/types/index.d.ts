export type Roles = {
      dataScope: string,
      description: string,
      level: number
}


export interface RuleForm {
    id?:number
    name: string
    pid?: number | string
    deptSort: number
    enabled: boolean
    roles:Array<Rules>
}