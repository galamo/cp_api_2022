import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { store } from "../store"
import { setToken } from "../store/reducers/settingsReducers"
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
    if (response.data.token) {
        store.dispatch(setToken(response.data.token))
    }
    return response;
}
function errorCallback(response: any) {
    if (response.response.status === 401) {
        window.location.href = "http://localhost:3000/login"
    }
    return Promise.reject(response)


}