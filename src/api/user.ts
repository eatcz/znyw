import request from "../utils/request";

// 查询
export const getUser = () => request({
    url: `/api/users`,
    method: 'GET',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    }
})

// 新增
export const addUser = (data:any) => request({
    url: '/api/users',
    method: 'POST',
    data,
    headers: {
        'Content-Type':'application/json'
    }
})

// 修改
export const updateUser = (data:any) => request({
    url: `/api/users`,
    method: 'PUT',
    data,
    headers: {
        'Content-Type':'application/json'
    }
})

// 删除
export const deleteUser = (data:any) => request({
    url: `/api/users`,
    method: 'Delete',
    data,
    headers: {
        'Content-Type':'application/json'
    }
})

// 修改用户：个人中心
export const updateUserCenter = (data:any) => request({
    url: `/api/users/center`,
    method: 'PUT',
    data,
    headers: {
        'Content-Type':'application/json'
    }
})

// 导出用户数据
export const exportUser = () => request({
    url: `/api/users/download`,
    method: 'GET',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    }
})

// 重置密码
export const resetPwd = (data:any) => request({
    url: `/api/users/resetPwd`,
    method: 'PUT',
    data,
    headers: {
        'Content-Type':'application/json'
    }
})

// 修改头像
export const updateAvator = (data:any) => request({
    url: '/api/users/updateAvatar',
    method: 'POST',
    data,
    headers: {
        'Content-Type':'multipart/form-data'
    }
})

// 修改邮箱
export const updateEmail = (code:number | string,data:any) => request({
    url: `/api/users/updateEmail/${code}`,
    method: 'PSOT',
    data,
    headers: {
        'Content-Type':'application/json'
    }
})

// 修改密码
export const updatePwd = (data:any) => request({
    url: `/api/users/updatePass`,
    method: 'POST',
    data,
    headers: {
        'Content-Type':'application/json'
    }
})