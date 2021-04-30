import axios from 'axios'
const URL = 'https://api.github.com/repos/zeit/next.js'
const API_URL = process.env.NEXT_PUBLIC_API_URL
export const fetchNextDataAPI = () => {
  return axios
    .get(`${URL}`, {})
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw error
    })
}
export const fetchTableAPI = () => {
  return axios
    .get(`${URL}`, {})
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw error
    })
}
