import request from "../utils/request";

// 获取角色
export const getRoles = () => request({
    url: `/api/roles`,
    method: 'GET',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    }
})