import axios from 'axios'
import { message } from 'antd'
const baseURL = process.env.API_URL
const service = axios.create({
  baseURL,
  timeout: 30000, // 请求延时
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})
// request 拦截器
service.interceptors.request.use((config) => {
  // config.data = {
  //   ...config.data,
  //   'DeviceFingerprint': DeviceFingerprint
  // }
  return config
}, (err) => {
  return Promise.reject(err)
})
//response 拦截器
service.interceptors.response.use((res) => {
  message.destroy();
  return res
}, (err) => {
  message.destroy();
  return Promise.reject(err)
})
const http = {
  get: function (api, data = {}) {
    return new Promise((resolve, reject) => {
      service.get(api, data).then((res) => {
        resolve(res);
      })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post: function (api, data = {}) {
    return new Promise((resolve, reject) => {
      service.post(api, data).then((res) => {
        resolve(res.data);
      })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
export default http
//{ data: { code: -1, msg: '接口错误' } }