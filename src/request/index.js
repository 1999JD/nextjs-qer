import axios from 'axios'


const dev = process.env.NODE_ENV !== 'production'
const server = dev ? 'http://172.16.131.46:7070' : 'https://next-qer.herokuapp.com/'

const request = axios.create({
  baseURL: server,
  headers: { 'Content-Type': 'application/json' },
})

request.defaults.timeout = 2500

export default request