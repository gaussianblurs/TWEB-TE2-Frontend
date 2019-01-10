const axios = require('axios')

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_ENV === 'production' ? 'https://api.decisio.tech' : 'http://localhost:8081'
})

module.exports = axiosInstance
