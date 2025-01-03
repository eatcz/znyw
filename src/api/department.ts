import request from "../utils/request2";

// 查询
export const getDepartment = () => request({
    url: `/api/dept`,
    method: 'GET',
    headers: {
        "Content-Type":'application/x-www-form-urlencoded'
    }
})

// 查询子部门
export const getSubDep = (pid:number) => request({
    url: `/api/dept?pid=${pid} `,
     method: 'GET',
    headers: {
        "Content-Type":'application/x-www-form-urlencoded'
    }
})

// 新增
export const addDepartment = (data:any) => request({
    url: `/api/dept`,
    method: 'POST',
    data,
    headers: {
        'Content-Type':'application/json'
    }
})

// 修改
export const updateDepartment = (data:any) => request({
    url: `/api/dept`,
    method: 'PUT',
    data,
    headers: {
        'Content-Type':'application/json'
    }
})

// 删除部门
export const deleteDepartment = (data:any) => request({
    url: `/api/dept`,
    method: 'DELETE',
    data,
    headers: {
        'Content-Type':'application/json'
    }
})

// 导出部门数据
export const exportDepartment = () => request({
    url: `/api/dept/download`,
    method: 'GET',
    headers: {
        "Content-Type":'application/x-www-form-urlencoded'
    }
})

// 查询部门:根据ID获取同级与上级数据
export const queryDepartment = (data:any) => request({
    url: `/api/dept/superior`,
    method: 'POST',
    data,
    headers: {
        "Content-Type":'application/json'
    }
})