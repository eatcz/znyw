import request from "../utils/request2";

export const getMenus = () => request({
    url: `/api/menus`,
    method: 'GET',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    }
})