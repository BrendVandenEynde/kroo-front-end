import axios from 'axios';

// function to setup axios instance with base URL and interceptors
const setupAxios = (router) => {
    // create axios instance with base URL
    const axiosInstance = axios.create({
        baseURL: 'https://kroo-back-end.onrender.com/api/v1',
    });

    // add a request interceptor
    axiosInstance.interceptors.request.use(
        config => {
            // get session token and remember me token from session storage
            const sessionToken = sessionStorage.getItem('sessionToken');
            const rememberMeToken = sessionStorage.getItem('rememberMeToken');

            // set Authorization header with session token if available
            if (sessionToken && rememberMeToken) {
                config.headers['Authorization'] = sessionToken;
                config.headers['Cookie'] = `rememberMeToken=${rememberMeToken}`;
            }

            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    // add a response interceptor
    axiosInstance.interceptors.response.use(
        response => {
            // handle success response and update session tokens if available
            handleSuccessResponse(response.data, router);
            return response;
        },
        error => {
            // handle unauthorized access error
            if (error.response.status === 401) {
                console.error('Unauthorized access.');
            }
            return Promise.reject(error);
        }
    );

    // function to handle success response and update session tokens
    const handleSuccessResponse = (responseData, router) => {
        if (responseData && responseData.data) {
            // update session token and remember me token in session storage
            if (responseData.data.sessionToken) {
                sessionStorage.setItem('sessionToken', responseData.data.sessionToken);
            }
            if (responseData.data.rememberMeToken) {
                sessionStorage.setItem('rememberMeToken', responseData.data.rememberMeToken);
            }
        }
    };

    return axiosInstance;
};

export default setupAxios;