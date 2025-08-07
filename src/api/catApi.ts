import axios from 'axios'

const API_KEY = import.meta.env.VITE_CAT_API_KEY || "live_FglRqbOWEuivXODLsytWIIiHIkv9rX7zlrhJZzEKSiAtbCbT5IQlC1oau4EQOQ4S"
const BASE_URL = 'https://api.thecatapi.com/v1'

const headers = {
  'x-api-key': API_KEY,
}
console.log('API Key:', API_KEY) // Debugging line to check if API key is loaded correctly

export const getCats = (limit = 10) =>
  axios.get(`${BASE_URL}/images/search?limit=${limit}`, { headers })

export const voteCat = (image_id: string, sub_id: string, value: 1 | -1) =>
  axios.post(
    `${BASE_URL}/votes`,
    { image_id, sub_id, value },
    { headers }
  )

export const getVotes = (sub_id: string) =>
  axios.get(`${BASE_URL}/votes?sub_id=${sub_id}`, { headers })
