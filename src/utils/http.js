import axios from 'axios';
const http = axios.create();

http.defaults.baseURL = 'http://i.waimai.meituan.com';
http.defaults.timeout = 10000;

http.interceptors.response.use(response => {
  // 在这里设置响应拦截
  return response.data;
});

export default http;
