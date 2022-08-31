import store from '../../../src/mock/store'

export default function handler(req, res) {
  const noData = {
    title: '不好意思，找不到餐廳',
    description:
      '請重新選擇店家',
  }
  const data = store.find((element) => element.id === req.query.id) || noData
  res.status(200).json(data)
}