import axios from "axios";
const JSON_PLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com';

const createConnection = () => {
    return axios.create({
        baseURL: JSON_PLACEHOLDER_BASE_URL,
    });
};

export const getPosts: any = async () => {
    return await axios.get(JSON_PLACEHOLDER_BASE_URL + '/posts');
};

export default createConnection;
