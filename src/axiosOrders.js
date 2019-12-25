import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-c2d38.firebaseio.com/'
});

export default instance;
