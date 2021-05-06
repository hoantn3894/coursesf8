import axios from 'axios';

class AxiosService {
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.instance = instance; // để các phương thức trong class có thể truy cập được vào biến instance
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        Promise.reject(error);
    }

    get(url) {
        return this.instance.get(url); // truy cập được biến instance được ở đây.
    }
}

export default new AxiosService();