import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"


export const axiosInstance: any = axios.create({ baseURL: "http://localhost:2200" })


axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    const token = window.localStorage.getItem("token")
    if (typeof token === 'string') {
        if (request.headers) {
            request.headers.authorization = token
        }
    }
    return request;
})

axiosInstance.interceptors.response.use(successCallback, errorCallback)
function successCallback(response: AxiosResponse) {
    return response;
}
function errorCallback(response: any) {
    console.log(response)
    if (response.response.status === 401) {
        window.location.href = "http://localhost:3000/login"
    }
    return Promise.reject(response)


}