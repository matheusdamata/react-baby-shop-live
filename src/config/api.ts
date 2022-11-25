import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export default {
  getProducts: async () => {
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data
  },
  getProduct: async (id: number) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`)
    return response.data
  },
  getRelatedProducts: async () => {
    const response = await axios.get(`${BASE_URL}/related-products`)
    return response.data
  },
  getPhotosPostInstagram: async () => {
    const response = await axios.get(`${BASE_URL}/instagram`)
    return response.data
  },
}
