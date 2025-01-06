import axios from "axios";


const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL2,
    // baseURL:'http://192.168.31.201:8000',
    timeout:5000
})

request.interceptors.request.use((config) => {
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIzNGU1MmNjNDM0YWY0NzRmODNhYTAzZTdkYTNkOTliMSIsInVzZXIiOiJhZG1pbiIsInN1YiI6ImFkbWluIn0.kfuIR8AnFO21UNMui-W6_7amo1WAg7fOVkmcLmi1rY1oAEAV4O22yrEOex6jFkgwoKmkOlamOGfJH3iApwAE4w'
    // Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI1OTk1NmIzNjE1OTA0Yjg2YTllYTU1ZTgxY2NhYmQ2NCIsInVzZXIiOiJhZG1pbiIsInN1YiI6ImFkbWluIn0.Dv8a-Rdjt22MHrEWPTiJJ_E1UJhOH1jcin25nnYn4ZmhctQGVxDUIltNJq8qgWJPV6scIrThnB7pwwMHHE0dZA

    return config
})

request.interceptors.response.use(res => {
    return res.data
}, err => {
    Promise.reject(err)
})

export default request