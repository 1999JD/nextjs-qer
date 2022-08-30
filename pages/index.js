import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Man from '../src/assets/man-one.png'
import Men from '../src/assets/men-three.png'
import SideStepBar from '../src/components/home/SideStepBar'
import Cards from '../src/components/home/Cards'


export default function Home() {
  return (
    <div>
      <Container >
        <Container maxWidth="md">
          <Typography component="h2" variant="h3" align={`center`} fontFamily="Monospace" >
            讓你快速通關  不再等候
          </Typography>
          <div >
            <img src={Man} alt="" />
            <img src={Men} alt="" />
          </div>
        </Container>
      </Container>
      <Container maxWidth="lg">
        <Grid item xs={10} sm={7} md={5} >
          <Typography component="h2" variant="h4" align={`center`}  >
            <InsertEmoticonIcon fontSize="large" />
            如何使用
          </Typography>
          <SideStepBar />
        </Grid>
      </Container>
      <Container >
        <Container maxWidth="md">
          <Typography component="h2" variant="h4" align={`center`}  >
            <InsertEmoticonIcon fontSize="large" />
            為什麼要使用 Qer
          </Typography>

          <Grid item xs container justifyContent='center' wrap="wrap" >
            <Cards />
          </Grid>
        </Container>
      </Container>
    </div>

  )
}