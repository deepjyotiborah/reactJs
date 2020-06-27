import axios from 'axios';

const instance = axios.create({
    baseURL:'https://project-deep-40d1e.firebaseio.com/'
});

export default instance;