import axios from 'axios'

const url = 'https://qiita.com/api/v2'
const request = axios.create()

request.interceptors.request.use((config: any) => {
  const newConfig = config

  newConfig.headers['Authorization'] = 'Bearer da68b0c770b1f2a46686d97784f0bc2c8394f7cc'

  return newConfig
})

export const fetchItems = (options: {[index: string]: any} = {}) => request.get(
  `${url}/items`,
  { params: options }
)