const axios = require('axios')
const { API_URL, BEARER_TOKEN } = require('../utils/index.js')

const api = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  }
})

module.exports = api
