import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from "axios";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FeaturedPost from '../src/components/search/FeaturedPost';

const featuredPosts = [
  {
    id: '123swe',
    title: '大飽飽',
    description:
      '中式餐廳。販賣麵類、飯類。營業時間：11:00 - 14:00 ',
    image: 'https://source.unsplash.com/random/300×150/?restaurant,rice',
    imageText: 'Image Text',
  },
  {
    id: 'sie113',
    title: '元氣咖啡廳',
    description:
      '營業時間：11:00 - 18:00。元氣咖啡廳，給你活力滿滿的下午。',
    image: 'https://source.unsplash.com/random/300×150/?coffee,restaurant',
    imageText: 'Image Text',
  },
];

export default function Search() {
  const router = useRouter()

  // let [result, setResult] = useState({
  //   data: [],
  //   isLoading: true,
  // })
  // let fetchSearchData = () => {
  //   return axios.get('https://jsonplaceholder.typicode.com/photos')
  //     .then(
  //       (res) => {
  //         setResult(() => ({
  //           data: res.data,
  //           isLoading: false,
  //         }))
  //       }
  //     )
  //     .catch(
  //       (err) => {
  //         console.log(err);
  //       }
  //     )
  // }

  // useEffect(() => {
  //   fetchSearchData();
  // }, []);
  // let { isLoading } = result;
  // console.log(result.data[1]);
  // const [visible, setVisible] = useState(7);
  // const onLoadMoreClick = () => {
  //     setVisible(v => v + 6);
  // };
  return (
    <div>
      {/* {result.data.slice(0, visible).map((item) => (
                <Button className="d-block mb-4">{item.title}</Button>
            ))} */}
      {/* {isLoading ? '更新中' : '更新完畢'} */}

      <Container maxWidth="lg">
        <Grid container spacing={4} component="ul">
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
      </Container>

    </div>
  )
}