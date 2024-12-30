import axios from "axios";

const request = axios.create({
    // baseURL: import.meta.env.BASE_URL,
    baseURL:'http://192.168.31.201:8000',
    timeout:5000
})

request.interceptors.request.use((config) => {
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

    return config
})

request.interceptors.response.use(res => {
    return res.data
}, err => {
    Promise.reject(err)
})

export default request