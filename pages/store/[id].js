import { useState } from 'react'
import { Container, Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import HighlightOff from '@mui/icons-material/HighlightOff';
import styled from '@emotion/styled'
import Link from 'next/link'
import request from '../../src/request'


const LightBoxStyled = styled(Paper)({
  position: 'fixed',
  zIndex: 1201,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: 'auto',
  maxWidth: '80vw',
  width: '600px',
  maxHeight: '80vh',
  height: 'fit-content',
  padding: '16px',
})

const ImageStyled = styled('img')({
  width: '100%',
  height: 'auto',
})

function Lightbox({ handleLightbox, storeId }) {
  return (
    <LightBoxStyled elevation={3}>
      <HighlightOff onClick={handleLightbox} sx={{
        position: 'absolute',
        right: 3,
        top: 3,
      }} />
      <Typography variant="h6" gutterBottom>
        請輸入您的資料
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="姓名"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="手機"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="人數"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="同意服務條款"
          />
        </Grid>
        <Grid item xs={12}>
          <Link href={`/queueing/${storeId}`}>
            <Button color='primary' variant="contained" >送出</Button>
          </Link>
        </Grid>

      </Grid>
    </LightBoxStyled>
  )
}


export default function Store({ storeInfo }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const handleLightbox = () => {
    setLightboxOpen(!lightboxOpen)
  }

  return (

    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <ImageStyled src='https://source.unsplash.com/random/300x150/?food' layout='fill' />
        </Grid>
        <Grid item xs={12} md={7}>
          <h2>{storeInfo.title}</h2>
          <p>{storeInfo.description}</p>
          <h3 >目前須等候時間:</h3>
          <p>{storeInfo.currentWaitTime}</p>
          <h3>目前號碼:</h3>
          <p>{storeInfo.currentWaitNumber}</p>
          <Button variant="contained"
            color="primary"
            onClick={handleLightbox}>
            點擊抽取號碼牌</Button>
        </Grid >
      </Grid >
      {
        lightboxOpen && (
          <Lightbox handleLightbox={handleLightbox} storeId={storeInfo.id} />
        )
      }
    </Container>
  )
}

export async function getServerSideProps({ params }) {
  const res = await request.get(`/api/store/${params.id}`)
  const data = await res.data
  return { props: { storeInfo: data } }
}