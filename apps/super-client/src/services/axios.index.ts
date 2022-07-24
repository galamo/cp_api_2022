import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"


export const axiosInstance: any = axios.create({ baseURL: "http://localhost:2200" })


axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    console.log("request sent")
    return request;
})

axiosInstance.interceptors.response.use(successCallback, errorCallback)
function successCallback(response: AxiosResponse) {
    console.log("inside response")
    return response;
}
function errorCallback(response: any) {
    console.log("inside response error")
    console.log(response)
    if (response.response.status === 401) {
        window.location.href = "http://localhost:3000/login"
    }
    return Promise.reject(response)

}