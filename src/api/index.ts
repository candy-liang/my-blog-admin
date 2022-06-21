import axios from 'axios';
import { ElMessage } from 'element-plus'
const service = axios.create({
    baseURL: import.meta.env.VITE_MOCK,
    timeout: 8000,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})
service.interceptors.request.use((config) => {
    config.headers = config.headers || {}
    config.headers.token = localStorage.getItem('token') || ''
    return config
})
service.interceptors.response.use(res => {
    // const code: number = res.data.code
    // if (code !== 200) {
    //     ElMessage.error('Oops, this is a error message.')
    //     return Promise.reject(res.data)
    // }
    return res.data
}, err => {
    console.log(err);
})

export default service