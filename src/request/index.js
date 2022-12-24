import axios from 'axios'



const server = process.env.DOMAIN

const request = axios.create({
  baseURL: server,
  headers: { 'Content-Type': 'application/json' },
})

export default request