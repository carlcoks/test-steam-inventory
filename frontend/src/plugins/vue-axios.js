import Vue from 'vue'
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 3000
})

Vue.prototype.$api = api

export default api
