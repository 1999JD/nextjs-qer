import request from '../src/request'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FeaturedPost from '../src/components/search/FeaturedPost';

export default function Search({ featuredPosts }) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} component="ul">
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
    </Container>
  )
}

export async function getServerSideProps() {
  console.log(request.defaults.baseURL)
  console.log(process.env.DOMAIN)
  try {
    const res = await request.get(`/api/search`)
    const data = await res.data
    return { props: { featuredPosts: data } }
  } catch (error) {
    console.log(error)
    return { props: { featuredPosts: [] } }
  }
}