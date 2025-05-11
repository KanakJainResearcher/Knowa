import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',  // Update with your backend URL if different
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;