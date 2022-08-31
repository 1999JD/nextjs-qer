import store from '../../src/mock/store'

export default function handler(_req, res) {
  res.status(200).json(store)
}