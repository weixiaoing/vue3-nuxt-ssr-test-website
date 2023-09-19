
// import axios from 'axios';


// // 初始参数
// const defaultConfig={
//     timeout:5000, //超时检查
//     baseUrl:'',//请求主机地址
// }



// // 创建请求实例
// const axiosInstance=axios.create(defaultConfig)

// // 请求拦截
// // promise对象,接受 成功 失败两个参数
// axiosInstance.interceptors.request.use(config=>{
//     return config 
// },
// // 成功返回config
// err=>{
//     return Promise.reject(err)
// })
// // 失败直接响应失败

// // 响应拦截 与请求拦截类似
// axiosInstance.interceptors.response.use(config=>{
//     return config
// },err=>{
//     return Promise.reject(err)
// })


// //封装请求 
// // get
// // 传入地址和参数两个 参数
// // 使用axios调用get请求返回promise对象
// function httpRequestGet(url,params){
//     return axiosInstance.get(url,params).then(res=>res.data).catch()
// }
// // post 同上
// function httpRequestPost(url,params){
//     return axiosInstance.post(url,params).then(res=>res.data).catch()
// }

// export default{
//     httpRequestGet,
//     httpRequestPost

// }

// ts化
import axios,{AxiosRequestConfig,AxiosResponse, InternalAxiosRequestConfig} from 'axios';
const defaultConfig = {
    timeout: 5000, //超时检查
    baseUrl: '',//请求主机地址
}
class Http {
    constructor() {
        this.httpInterceptorResponse()
        this.httpInterceptorsRequest()
    }
    private static axiosInstance = axios.create(defaultConfig)
// 请求拦截
    private httpInterceptorsRequest() {
        Http.axiosInstance.interceptors.request.use((config:InternalAxiosRequestConfig) => {
            return config
        },
            err => {
                return Promise.reject(err)
            })
    }
//响应拦截
    private httpInterceptorResponse() {
        Http.axiosInstance.interceptors.response.use((response:AxiosResponse) => {
            return response
        }, err => {
            return Promise.reject(err)
        })
    }

    /**
     * 封装请求
     */
    // get
    public  httpRequsetGet<T>(url:string, params:AxiosRequestConfig):Promise<T> {
        return Http.axiosInstance.get(url, params).then(res => res.data).catch()
    }
    //post
    public  httpRequestPost<T>(url:string, params:AxiosRequestConfig):Promise<T> {
        return Http.axiosInstance.post(url, params).then(res => res.data).catch()
    }
}







export const http=new Http()