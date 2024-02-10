import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const axiosConfig: AxiosRequestConfig = {};

export const get = <T>(url: string): Promise<AxiosResponse<T | string, any>> => {
    return axios.get(url, axiosConfig);
}

export const post = <D, T>(url: string, data: D): Promise<AxiosResponse<T | string, any>> => {
    return axios.get(url, {
        ...axiosConfig,
        data: data
    });
}

export const put = <D, T>(url: string, data: D): Promise<AxiosResponse<T | string, any>> => {
    return axios.get(url, {
        ...axiosConfig,
        data: data
    });
}

export const del = <T>(url: string): Promise<AxiosResponse<T, any>> => {
    return axios.get(url, axiosConfig);
}