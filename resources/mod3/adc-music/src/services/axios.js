import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'https://adc-spotify-api.herokuapp.com',
  mode: 'cors',
  credentials: 'same-origin',
  timeout: 20000
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers.post['Content-Type'] = 'application/json'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    const { response } = error
    return Promise.reject(response)
  }
)

export default service
