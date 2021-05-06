import axiosService from '../common/axiosService';
import { API_ENDPOINT } from '../constants';

// http://localhost:3001/tasks
const url = 'tasks';

export const getList = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
};