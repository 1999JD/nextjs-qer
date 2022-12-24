import axios from 'axios'



const server = process.env.DOMAIN

const request = axios.create({
  baseURL: server,
  headers: { 'Content-Type': 'application/json' },
})

request.defaults.timeout = 2500

export default request