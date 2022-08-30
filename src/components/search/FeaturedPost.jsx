import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link'
import CssBaseline from '@mui/material/CssBaseline';


function FeaturedPost({ post }) {
  return (
    <Grid item xs={12} md={6} component="li">
      <CssBaseline />
      <Card>
        <CardContent>
          {post.title}
          <Typography component="h2" variant="h5">
            {post.title}
          </Typography>
          <Typography component="h2" variant="subtitle1" color="textSecondary">
            {post.distance}
          </Typography>
          <Typography component="h2" variant="subtitle1" paragraph >
            {post.description}
          </Typography>
          <Typography component="h2" variant="subtitle1" color="primary">

            <Link href="/">
              <a>continue reading</a>
            </Link>
          </Typography>
        </CardContent>
        <CardMedia image={post.image} title={post.imageTitle} />
      </Card>
    </Grid>
  )
}



export default FeaturedPost
