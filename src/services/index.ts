import axios from 'axios'

const api = axios.create({
  baseURL: 'http://deckofcardsapi.com/api/deck',
})

export { api }
