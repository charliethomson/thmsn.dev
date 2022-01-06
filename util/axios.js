

import ax from "axios";
import cfg from "../nuxt.config.js"

export const baseUrl = cfg.dev ? "http://127.0.0.1:1337" : "https://thcdn-dev.herokuapp.com";


export const axios = ax.create({
    baseURL: baseUrl + '/api',

    timeout: 1000, // default is `0` (no timeout)

    responseType: 'json', // default

    responseEncoding: 'utf8', // default
    params: {
    },
});

export default axios;

// axios.interceptors.request.use(request => {
//     console.log('Starting Request', JSON.stringify(request, null, 2))
//     return request
// })

// axios.interceptors.response.use(response => {
//     console.log('Response:', JSON.stringify(response, null, 2))
//     return response
// })