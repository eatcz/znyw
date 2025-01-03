import request from "../utils/request";
import type { Code, Login } from "./types/login";


// 获取验证码
export const code = ():Promise<Code> => request({
    url: '/auth/code',
    method: 'GET',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    }
})

// 登录
export const login = (data:Login):Promise<string> => request({
    url: '/auth/login',
    method: 'POST',
    headers: {
        'Content-Type':'application/json',
    },
    data
})