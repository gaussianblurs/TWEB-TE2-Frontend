const axios = require('axios')

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_ENV === 'production' ? 'https://tweb-te2-backend-gaussianblurs.herokuapp.com/' : 'http://localhost:8081'
})

module.exports = axiosInstance
