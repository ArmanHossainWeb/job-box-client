import axios from 'axios';
import React from 'react';
import UseAuth from './UseAuth';

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000"
})

const UseAxiosSecure = () => {
    const {user} = UseAuth()

    // request interceptors 
    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    })

    // response interceptor 
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        console.log("error in interseptor", error);
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default UseAxiosSecure;