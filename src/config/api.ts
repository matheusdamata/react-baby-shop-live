import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export default {
  getProducts: async () => {
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data
  },
  getPhotosPostInstagram: async () => {
    const response = await axios.get(`${BASE_URL}/instagram`)
    return response.data
  },
}
