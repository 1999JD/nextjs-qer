import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from "axios";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FeaturedPost from '../src/components/search/FeaturedPost';

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
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
      {router.query.id}
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