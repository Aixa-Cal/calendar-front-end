import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables()




const calendarApi = axios.create({
    baseURL: VITE_API_URL
});

// Todo: configurar interceptores

calendarApi.interceptors.request.use(config => {
    console.log('Interceptor: Adding token to request headers');
    config.headers = {
        ...config.headers,
        'X-token': localStorage.getItem('token')
    }
    return config;
});


export default calendarApi;