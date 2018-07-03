import axios from 'axios'
import config from './config'
const api = axios.create({ baseURL: config.API_HOST })
export default api
