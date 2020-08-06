import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b12ca.firebaseio.com/'
});


export default instance;