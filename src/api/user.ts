import request from "../utils/request";

export const getUser = () => request({
    url: `/api/users`,
    method: 'GET',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    }
})