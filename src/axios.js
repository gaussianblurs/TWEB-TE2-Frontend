const axios = require('axios')

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/popular?page=1&api_key=f1be4bafe6f7cb0cb84f5948c5b75497'
})

module.exports = axiosInstance
