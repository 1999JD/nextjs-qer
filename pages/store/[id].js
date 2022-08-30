import { useState } from 'react'
import { Container, Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import HighlightOff from '@mui/icons-material/HighlightOff';

function Lightbox({ handleLightbox }) {

  return (
    <Paper elevation={15} >
      <HighlightOff onClick={handleLightbox} />
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
          <Button color='primary' variant="contained" >送出</Button>
        </Grid>

      </Grid>
    </Paper>
  )
}


function Client() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const handleLightbox = () => {
    setLightboxOpen(!lightboxOpen)
  }

  return (

    <Container >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <img src="https://fakeimg.pl/250x300/" alt="" />
        </Grid>
        <Grid item xs={12} sm={8}>
          <h2>美食大同</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, itaque facere voluptatibus sunt odit eum ipsam architecto nostrum optio, inventore, at veritatis et quia soluta nemo! Molestiae cumque laudantium eveniet. </p>
          <p>XX市XX區XX里XX路XX段XX號</p>
          <div>
            <h3 >目前須等候時間:</h3><span >1:10:36</span>
          </div>
          <div>
            <h3 >目前號碼:</h3><span >8</span>
          </div>

          <Button variant="contained"
            color="primary"
            onClick={handleLightbox}>
            點擊抽取號碼牌</Button>
        </Grid >
      </Grid >
      {
        lightboxOpen && (
          <Lightbox handleLightbox={handleLightbox} />
        )
      }


    </Container >
  )
}
export default Client;