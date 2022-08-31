import store from '../../../src/mock/store'

export default function handler(req, res) {
  const data = store.find((element) => element.id === req.query.id)
  res.status(200).json(data)
}