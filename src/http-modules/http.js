import axios from 'axios';

axios.interceptors.response.use(null, (error) => {

    const isUsual =
        error.response &&
        error.response.status > 400 &&
        error.response.status < 500;

    if (isUsual) {
        console.log('USUAL ERROR:', error.response);
        return Promise.reject(error);
    }

    return Promise.reject(error);
})


export default {
    get: axios.get,
    put: axios.put,
    delete: axios.delete
}