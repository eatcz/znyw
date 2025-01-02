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
export const addUser = (data) => request({
    url: '/api/users',
    method: 'POST',
    data
})