import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link'
import Image from 'next/image'

function FeaturedPost({ post }) {
  return (
    <Grid item xs={12} sm={6} lg={4} component="li"  >
      <Card>
        <div style={{ objectFit: ' cover' }}>
          <Image src={post.image} width={300} height={150} layout="responsive" />
        </div>
        <CardContent>
          <Typography component="h2" variant="h5">
            {post.title}
          </Typography>
          <Typography component="h2" variant="subtitle1" color="textSecondary">
            {post.distance}
          </Typography>
          <Typography component="h2" variant="subtitle1" paragraph sx={
            {
              overflow: ' hidden',
              display: ' -webkit-box',
              'WebkitBoxOrient': 'vertical',
              'WebkitLineClamp': ' 2',
            }} >
            {post.description}
          </Typography>
          <Typography component="h2" variant="subtitle1" color="primary">
            <Link href={`/store/${post.id}`}>
              <a>我要排隊</a>
            </Link>
          </Typography>
        </CardContent>
        <CardMedia image={post.image} title={post.imageTitle} />
      </Card>
    </ Grid >
  )
}



export default FeaturedPost
