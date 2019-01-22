import axios from 'axios'
import { baseUrl } from './config'

export const getPosts = (options: {}) => axios.get(
  `${baseUrl}/blogs`,
  { params: { ...options }}
)